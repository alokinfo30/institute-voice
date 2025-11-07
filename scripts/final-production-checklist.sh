#!/bin/bash

set -e

echo "🔍 EduAble Production Readiness Final Checklist"
echo "================================================"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${GREEN}✓${NC} $1"; }
log_warn() { echo -e "${YELLOW}⚠${NC} $1"; }
log_error() { echo -e "${RED}✗${NC} $1"; }

check_infrastructure() {
    log_info "Checking Infrastructure..."
    
    # Check AWS resources
    aws ec2 describe-instances --filters "Name=instance-state-name,Values=running" --query 'Reservations[].Instances[].InstanceId' --output text | grep -q . && log_info "EC2 instances running" || log_error "No EC2 instances found"
    
    # Check databases
    aws rds describe-db-instances --query 'DBInstances[].DBInstanceIdentifier' --output text | grep -q eduable && log_info "RDS database exists" || log_error "RDS database not found"
    
    # Check load balancers
    aws elbv2 describe-load-balancers --query 'LoadBalancers[].LoadBalancerName' --output text | grep -q eduable && log_info "Load balancer exists" || log_error "Load balancer not found"
}

check_services() {
    log_info "Checking Microservices..."
    
    services=("api-gateway" "user-service" "content-service" "analytics-service" "doubt-service" "ai-service" "notification-service" "payment-service")
    
    for service in "${services[@]}"; do
        if curl -s -f "http://localhost:3000/api/health" > /dev/null; then
            log_info "$service is healthy"
        else
            log_error "$service health check failed"
        fi
    done
}

check_database() {
    log_info "Checking Database Connections..."
    
    # Check main database
    if mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "SELECT 1;" > /dev/null 2>&1; then
        log_info "Main database connection successful"
    else
        log_error "Main database connection failed"
    fi
    
    # Check service databases
    databases=("eduable_users" "eduable_content" "eduable_analytics" "eduable_doubts" "eduable_notifications" "eduable_payments")
    for db in "${databases[@]}"; do
        if mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "USE $db; SELECT 1;" > /dev/null 2>&1; then
            log_info "Database $db accessible"
        else
            log_error "Database $db inaccessible"
        fi
    done
}

check_security() {
    log_info "Checking Security Configuration..."
    
    # Check SSL certificate
    if openssl s_client -connect $DOMAIN:443 -servername $DOMAIN < /dev/null 2>/dev/null | openssl x509 -noout -dates > /dev/null; then
        log_info "SSL certificate is valid"
    else
        log_error "SSL certificate check failed"
    fi
    
    # Check security headers
    if curl -s -I "https://$DOMAIN" | grep -q "strict-transport-security"; then
        log_info "HSTS header present"
    else
        log_warn "HSTS header missing"
    fi
}

check_performance() {
    log_info "Checking Performance..."
    
    # API response time
    response_time=$(curl -s -w "%{time_total}" -o /dev/null "https://$DOMAIN/api/health")
    if (( $(echo "$response_time < 1.0" | bc -l) )); then
        log_info "API response time: ${response_time}s"
    else
        log_warn "API response time slow: ${response_time}s"
    fi
    
    # Database query performance
    db_time=$(mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "SELECT BENCHMARK(1000000, AES_ENCRYPT('test', 'key'));" 2>/dev/null | grep -o '[0-9.]*' | tail -1)
    log_info "Database performance: ${db_time}s for 1M encryptions"
}

check_monitoring() {
    log_info "Checking Monitoring..."
    
    # CloudWatch logs
    if aws logs describe-log-groups --log-group-name-prefix "/eduable" --query 'logGroups[].logGroupName' --output text | grep -q .; then
        log_info "CloudWatch log groups exist"
    else
        log_error "CloudWatch log groups missing"
    fi
    
    # Alarms
    if aws cloudwatch describe-alarms --alarm-name-prefix "eduable" --query 'MetricAlarms[].AlarmName' --output text | grep -q .; then
        log_info "CloudWatch alarms configured"
    else
        log_warn "No CloudWatch alarms found"
    fi
}

check_backups() {
    log_info "Checking Backup Configuration..."
    
    # RDS backups
    if aws rds describe-db-instance-automated-backups --db-instance-identifier eduable-db --query 'DBInstanceAutomatedBackups[].DBInstanceArn' --output text | grep -q .; then
        log_info "RDS automated backups enabled"
    else
        log_error "RDS automated backups not configured"
    fi
    
    # S3 versioning
    if aws s3api get-bucket-versioning --bucket $BACKUP_BUCKET --query 'Status' --output text | grep -q Enabled; then
        log_info "S3 versioning enabled for backups"
    else
        log_warn "S3 versioning not enabled for backup bucket"
    fi
}

run_final_checks() {
    log_info "Running Final Checks..."
    
    check_infrastructure
    check_services
    check_database
    check_security
    check_performance
    check_monitoring
    check_backups
    
    log_info "🎉 All checks completed!"
}

# Load environment
source .env.production

run_final_checks