#!/bin/bash

set -e

echo "🚀 Starting EduAble Production Deployment..."

# Load environment
source .env.production

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${GREEN}✓${NC} $1"; }
log_warn() { echo -e "${YELLOW}⚠${NC} $1"; }
log_error() { echo -e "${RED}✗${NC} $1"; }

# Pre-deployment checks
pre_deployment_checks() {
    log_info "Running pre-deployment checks..."
    
    # Check environment variables
    required_vars=(
        "AWS_ACCESS_KEY_ID" "AWS_SECRET_ACCESS_KEY" "AWS_REGION"
        "DB_PASSWORD" "JWT_SECRET" "STRIPE_SECRET_KEY"
    )
    
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            log_error "Missing required environment variable: $var"
            exit 1
        fi
    done
    
    # Check Docker and dependencies
    command -v docker >/dev/null 2>&1 || { log_error "Docker is not installed"; exit 1; }
    command -v docker-compose >/dev/null 2>&1 || { log_error "Docker Compose is not installed"; exit 1; }
    command -v aws >/dev/null 2>&1 || { log_error "AWS CLI is not installed"; exit 1; }
    
    log_info "All pre-deployment checks passed"
}

# Build and push images
build_and_push_images() {
    log_info "Building and pushing Docker images..."
    
    services=(
        "api-gateway" "user-service" "content-service" "analytics-service"
        "doubt-service" "ai-service" "notification-service" "payment-service"
    )
    
    for service in "${services[@]}"; do
        log_info "Building $service..."
        docker build -t $ECR_REGISTRY/eduable-$service:$VERSION ./services/$service
        
        log_info "Pushing $service..."
        docker push $ECR_REGISTRY/eduable-$service:$VERSION
    done
    
    # Build and push frontend
    log_info "Building frontend..."
    docker build -t $ECR_REGISTRY/eduable-frontend:$VERSION ./apps/shell
    docker push $ECR_REGISTRY/eduable-frontend:$VERSION
}

# Database migration
run_migrations() {
    log_info "Running database migrations..."
    
    # Wait for database to be ready
    until nc -z $DB_HOST $DB_PORT; do
        log_info "Waiting for database..."
        sleep 5
    done
    
    # Run migrations for each service
    for service in "${services[@]}"; do
        log_info "Running migrations for $service..."
        docker run --rm \
            -e DB_HOST=$DB_HOST \
            -e DB_PORT=$DB_PORT \
            -e DB_USERNAME=$DB_USERNAME \
            -e DB_PASSWORD=$DB_PASSWORD \
            $ECR_REGISTRY/eduable-$service:$VERSION \
            npm run migration:run
    done
}

# Deploy infrastructure
deploy_infrastructure() {
    log_info "Deploying infrastructure with Terraform..."
    
    cd infrastructure/terraform
    
    terraform init -reconfigure
    terraform workspace select $ENVIRONMENT || terraform workspace new $ENVIRONMENT
    terraform plan -var-file="environments/$ENVIRONMENT.tfvars"
    terraform apply -var-file="environments/$ENVIRONMENT.tfvars" -auto-approve
    
    cd ../..
}

# Update ECS services
update_ecs_services() {
    log_info "Updating ECS services..."
    
    for service in "${services[@]}"; do
        log_info "Updating $service service..."
        
        aws ecs update-service \
            --cluster eduable-cluster-$ENVIRONMENT \
            --service eduable-$service-$ENVIRONMENT \
            --force-new-deployment
    done
}

# Run health checks
health_checks() {
    log_info "Running health checks..."
    
    # Wait for services to be healthy
    log_info "Waiting for services to be healthy..."
    sleep 60
    
    # Check API Gateway
    API_URL=$(terraform output -raw api_gateway_url)
    if curl -f "$API_URL/health" > /dev/null 2>&1; then
        log_info "API Gateway is healthy"
    else
        log_error "API Gateway health check failed"
        exit 1
    fi
    
    # Check frontend
    FRONTEND_URL=$(terraform output -raw frontend_url)
    if curl -f "$FRONTEND_URL" > /dev/null 2>&1; then
        log_info "Frontend is healthy"
    else
        log_error "Frontend health check failed"
        exit 1
    fi
}

# Post-deployment tasks
post_deployment_tasks() {
    log_info "Running post-deployment tasks..."
    
    # Warm up caches
    log_info "Warming up caches..."
    curl -s "$API_URL/ai/warm-cache" > /dev/null 2>&1 &
    
    # Update search indexes
    log_info "Updating search indexes..."
    curl -s "$API_URL/content/update-indexes" > /dev/null 2>&1 &
    
    # Send deployment notification
    send_deployment_notification
}

send_deployment_notification() {
    log_info "Sending deployment notification..."
    
    # This would integrate with your notification system (Slack, Email, etc.)
    MESSAGE="🚀 EduAble v$VERSION successfully deployed to $ENVIRONMENT environment"
    
    # Example: Send to Slack
    if [ -n "$SLACK_WEBHOOK_URL" ]; then
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"$MESSAGE\"}" \
            $SLACK_WEBHOOK_URL
    fi
}

# Main deployment flow
main() {
    log_info "Starting production deployment v$VERSION to $ENVIRONMENT"
    
    pre_deployment_checks
    build_and_push_images
    run_migrations
    deploy_infrastructure
    update_ecs_services
    health_checks
    post_deployment_tasks
    
    log_info "🎉 Production deployment completed successfully!"
    log_info "📊 Application URL: $(terraform output -raw frontend_url)"
    log_info "🔧 API URL: $(terraform output -raw api_gateway_url)"
}

# Parse command line arguments
while getopts "v:e:" opt; do
    case $opt in
        v) VERSION="$OPTARG" ;;
        e) ENVIRONMENT="$OPTARG" ;;
        *) echo "Usage: $0 -v version -e environment" && exit 1 ;;
    esac
done

# Set defaults
VERSION=${VERSION:-$(git describe --tags --always)}
ENVIRONMENT=${ENVIRONMENT:-production}

main