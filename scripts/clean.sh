#!/bin/bash

echo "🧹 Cleaning EduAble deployment..."

# Stop and remove containers
docker-compose down -v

# Remove unused images
docker image prune -f

# Remove unused volumes
docker volume prune -f

echo "✅ Cleanup completed"