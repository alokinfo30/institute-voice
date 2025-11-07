#!/bin/bash

echo "🔍 EduAble Production Readiness Checklist"
echo "=========================================="

# Check environment variables
echo ""
echo "1. Environment Variables:"
if [ -f .env ]; then
    echo "   ✅ .env file exists"
    required_vars=("DB_PASSWORD" "JWT_SECRET" "SMTP_PASS" "STRIPE_SECRET_KEY")
    for var in "${required_vars[@]}"; do
        if grep -q "$var" .env; then
            echo "   ✅ $var is set"
        else
            echo "   ❌ $var is missing"
        fi
    done
else
    echo "   ❌ .env file missing"
fi

# Check Docker
echo ""
echo "2. Docker Setup:"
if command -v docker &> /dev/null; then
    echo "   ✅ Docker is installed"
else
    echo "   ❌ Docker is not installed"
fi

if command -v docker-compose &> /dev/null; then
    echo "   ✅ Docker Compose is installed"
else
    echo "   ❌ Docker Compose is not installed"
fi

# Check ports
echo ""
echo "3. Port Availability:"
ports=(3000 5173 3306 6379)
for port in "${ports[@]}"; do
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
        echo "   ❌ Port $port is in use"
    else
        echo "   ✅ Port $port is available"
    fi
done

# Check disk space
echo ""
echo "4. System Resources:"
disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $disk_usage -lt 80 ]; then
    echo "   ✅ Disk usage: $disk_usage%"
else
    echo "   ❌ Disk usage: $disk_usage% (above 80%)"
fi

# Check memory
memory_usage=$(free | awk 'NR==2{printf "%.2f", $3*100/$2}')
echo "   📊 Memory usage: $memory_usage%"

echo ""
echo "📝 Production Checklist Complete"
echo "Run './scripts/deploy.sh' to start the application"