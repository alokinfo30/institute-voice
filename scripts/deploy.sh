#!/bin/bash

set -e

echo "🚀 Starting EduAble Deployment..."

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Logging functions
log_info() {
    echo -e "${GREEN}✓${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check dependencies
check_dependencies() {
    log_info "Checking dependencies..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed"
        exit 1
    fi
    
    log_info "All dependencies are satisfied"
}

# Build and start services
deploy_services() {
    log_info "Building and starting services..."
    
    # Build all services
    docker-compose build
    
    # Start database services first
    log_info "Starting database services..."
    docker-compose up -d mysql redis
    
    # Wait for databases to be ready
    log_info "Waiting for databases to be ready..."
    sleep 30
    
    # Start all services
    log_info "Starting all services..."
    docker-compose up -d
    
    # Wait for services to be ready
    log_info "Waiting for services to be ready..."
    sleep 30
    
    log_info "All services are starting up..."
}

# Run health checks
health_check() {
    log_info "Running health checks..."
    
    # Check API Gateway
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        log_info "API Gateway is healthy"
    else
        log_error "API Gateway health check failed"
        exit 1
    fi
    
    # Check Frontend
    if curl -f http://localhost:5173 > /dev/null 2>&1; then
        log_info "Frontend is healthy"
    else
        log_error "Frontend health check failed"
        exit 1
    fi
    
    log_info "All health checks passed!"
}

# Display deployment info
display_info() {
    echo ""
    echo "🎉 EduAble Deployment Completed Successfully!"
    echo ""
    echo "📊 Services Status:"
    echo "   API Gateway:    http://localhost:3000"
    echo "   Frontend:       http://localhost:5173"
    echo "   API Docs:       http://localhost:3000/api/docs"
    echo ""
    echo "🔧 Management Commands:"
    echo "   View logs:      docker-compose logs -f"
    echo "   Stop services:  docker-compose down"
    echo "   Restart:        docker-compose restart"
    echo ""
    echo "📝 Next Steps:"
    echo "   1. Access the application at http://localhost:5173"
    echo "   2. Check API documentation at http://localhost:3000/api/docs"
    echo "   3. Monitor services with: docker-compose ps"
    echo ""
}

# Main deployment function
main() {
    log_info "Starting EduAble deployment..."
    
    check_dependencies
    deploy_services
    health_check
    display_info
    
    log_info "Deployment completed successfully! 🎉"
}

# Run main function
main "$@"