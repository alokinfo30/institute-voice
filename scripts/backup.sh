#!/bin/bash

set -e

BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

echo "📦 Starting database backup..."

mkdir -p $BACKUP_DIR

# Backup MySQL databases
docker-compose exec -T mysql mysqldump -u root -peduable_root_password --all-databases > $BACKUP_DIR/eduable_backup_$TIMESTAMP.sql

# Backup Redis data
docker-compose exec -T redis redis-cli SAVE
docker cp eduable-redis:/data/dump.rdb $BACKUP_DIR/redis_backup_$TIMESTAMP.rdb

echo "✅ Backup completed: $BACKUP_DIR/eduable_backup_$TIMESTAMP.sql"