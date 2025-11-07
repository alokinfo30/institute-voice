terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "eduable-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "eduable-vpc"
  }
}

# Subnets
resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(["10.0.1.0/24", "10.0.2.0/24"], count.index)
  availability_zone = element(["${var.aws_region}a", "${var.aws_region}b"], count.index)

  tags = {
    Name = "eduable-private-subnet-${count.index + 1}"
  }
}

resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = element(["10.0.101.0/24", "10.0.102.0/24"], count.index)
  availability_zone = element(["${var.aws_region}a", "${var.aws_region}b"], count.index)
  map_public_ip_on_launch = true

  tags = {
    Name = "eduable-public-subnet-${count.index + 1}"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "eduable-igw"
  }
}

# Route Tables
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "eduable-public-rt"
  }
}

resource "aws_route_table_association" "public" {
  count          = 2
  subnet_id      = element(aws_subnet.public[*].id, count.index)
  route_table_id = aws_route_table.public.id
}

# Security Groups
resource "aws_security_group" "load_balancer" {
  name        = "eduable-alb-sg"
  description = "Security group for Application Load Balancer"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "eduable-alb-sg"
  }
}

resource "aws_security_group" "ecs_service" {
  name        = "eduable-ecs-service-sg"
  description = "Security group for ECS services"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 3000
    to_port         = 3007
    protocol        = "tcp"
    security_groups = [aws_security_group.load_balancer.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "eduable-ecs-service-sg"
  }
}

# ECR Repositories
resource "aws_ecr_repository" "services" {
  for_each = toset([
    "api-gateway", "user-service", "content-service", "analytics-service",
    "doubt-service", "ai-service", "notification-service", "payment-service", "frontend"
  ])

  name = "eduable-${each.key}"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Service = each.key
  }
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "eduable-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name = "eduable-ecs-cluster"
  }
}

# ECS Task Definitions
resource "aws_ecs_task_definition" "api_gateway" {
  family                   = "eduable-api-gateway"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([{
    name  = "api-gateway"
    image = "${aws_ecr_repository.services["api-gateway"].repository_url}:latest"
    portMappings = [{
      containerPort = 3000
      hostPort      = 3000
      protocol      = "tcp"
    }]
    environment = [
      { name = "NODE_ENV", value = "production" },
      { name = "DB_HOST", value = aws_db_instance.main.address },
      { name = "DB_PORT", value = tostring(aws_db_instance.main.port) },
      { name = "DB_USERNAME", value = var.db_username },
      { name = "DB_PASSWORD", value = var.db_password },
      { name = "JWT_SECRET", value = var.jwt_secret }
    ]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = "/ecs/eduable"
        "awslogs-region"        = var.aws_region
        "awslogs-stream-prefix" = "api-gateway"
      }
    }
  }])

  tags = {
    Service = "api-gateway"
  }
}

# Similar task definitions for other services...

# Application Load Balancer
resource "aws_lb" "main" {
  name               = "eduable-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.load_balancer.id]
  subnets            = aws_subnet.public[*].id

  enable_deletion_protection = false

  tags = {
    Name = "eduable-alb"
  }
}

# RDS Database
resource "aws_db_instance" "main" {
  identifier              = "eduable-db"
  instance_class          = "db.t3.micro"
  allocated_storage       = 20
  engine                  = "mysql"
  engine_version          = "8.0"
  username                = var.db_username
  password                = var.db_password
  db_name                 = "eduable_main"
  parameter_group_name    = "default.mysql8.0"
  skip_final_snapshot     = true
  multi_az                = false
  storage_encrypted       = true
  vpc_security_group_ids  = [aws_security_group.database.id]
  db_subnet_group_name    = aws_db_subnet_group.main.name

  tags = {
    Name = "eduable-db"
  }
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "main" {
  cluster_id           = "eduable-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7.0"
  port                 = 6379
  security_group_ids   = [aws_security_group.redis.id]
  subnet_group_name    = aws_elasticache_subnet_group.main.name

  tags = {
    Name = "eduable-redis"
  }
}