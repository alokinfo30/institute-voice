#!/bin/bash

# Health monitoring script for EduAble services

SERVICES=(
    "api-gateway:3000"
    "frontend:5173"
)

ALERT_EMAIL="admin@eduable.com"
LOG_FILE="./health-monitor.log"

log() {
    echo "$(date): $1" >> $LOG_FILE
}

check_service() {
    local service=$1
    local url="http://localhost:${service#*:}"
    
    if curl -f -s --retry 3 --max-time 10 "$url/health" > /dev/null; then
        log "✅ $service is healthy"
        return 0
    else
        log "❌ $service is unhealthy"
        return 1
    fi
}

send_alert() {
    local service=$1
    local subject="ALERT: EduAble Service Down - $service"
    local body="Service $service is not responding. Please check immediately."
    
    # In production, you would send an email or notification
    echo "$body" | mail -s "$subject" $ALERT_EMAIL
    log "📧 Alert sent for $service"
}

monitor_services() {
    log "Starting health check..."
    
    for service in "${SERVICES[@]}"; do
        if ! check_service "$service"; then
            send_alert "$service"
        fi
    done
    
    log "Health check completed"
}

# Run monitoring
monitor_services