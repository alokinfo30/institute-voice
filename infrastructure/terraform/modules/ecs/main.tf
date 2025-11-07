# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "eduable-${var.environment}"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Environment = var.environment
    Project     = "eduable"
  }
}

# ECS Task Definitions for each service
resource "aws_ecs_task_definition" "services" {
  for_each = var.ecr_repository_urls

  family                   = "eduable-${each.key}-${var.environment}"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.cpu
  memory                   = var.memory
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([{
    name  = each.key
    image = each.value
    portMappings = [{
      containerPort = local.service_ports[each.key]
      hostPort      = local.service_ports[each.key]
      protocol      = "tcp"
    }]
    environment = local.service_environments[each.key]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        "awslogs-group"         = aws_cloudwatch_log_group.ecs.name
        "awslogs-region"        = data.aws_region.current.name
        "awslogs-stream-prefix" = each.key
      }
    }
    healthCheck = {
      command     = ["CMD-SHELL", "curl -f http://localhost:${local.service_ports[each.key]}/health || exit 1"]
      interval    = 30
      timeout     = 5
      retries     = 3
      startPeriod = 60
    }
  }])

  tags = {
    Service     = each.key
    Environment = var.environment
  }
}

# ECS Services
resource "aws_ecs_service" "services" {
  for_each = aws_ecs_task_definition.services

  name            = "eduable-${each.key}-${var.environment}"
  cluster         = aws_ecs_cluster.main.id
  task_definition = each.value.arn
  desired_count   = var.desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.private_subnet_ids
    security_groups  = [aws_security_group.ecs_service.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.services[each.key].arn
    container_name   = each.key
    container_port   = local.service_ports[each.key]
  }

  depends_on = [aws_lb_listener.services]

  tags = {
    Service     = each.key
    Environment = var.environment
  }
}

# Auto Scaling
resource "aws_appautoscaling_target" "services" {
  for_each = aws_ecs_service.services

  max_capacity       = var.auto_scaling_config.max_capacity
  min_capacity       = var.auto_scaling_config.min_capacity
  resource_id        = "service/${aws_ecs_cluster.main.name}/${each.value.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "cpu" {
  for_each = aws_appautoscaling_target.services

  name               = "cpu-scaling-${each.key}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = each.value.resource_id
  scalable_dimension = each.value.scalable_dimension
  service_namespace  = each.value.service_namespace

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value       = var.auto_scaling_config.target_cpu
    scale_in_cooldown  = var.auto_scaling_config.scale_in_cooldown
    scale_out_cooldown = var.auto_scaling_config.scale_out_cooldown
  }
}

resource "aws_appautoscaling_policy" "memory" {
  for_each = aws_appautoscaling_target.services

  name               = "memory-scaling-${each.key}"
  policy_type        = "TargetTrackingScaling"
  resource_id        = each.value.resource_id
  scalable_dimension = each.value.scalable_dimension
  service_namespace  = each.value.service_namespace

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageMemoryUtilization"
    }
    target_value       = var.auto_scaling_config.target_memory
    scale_in_cooldown  = var.auto_scaling_config.scale_in_cooldown
    scale_out_cooldown = var.auto_scaling_config.scale_out_cooldown
  }
}

# Local values for service configurations
locals {
  service_ports = {
    "api-gateway"        = 3000
    "user-service"       = 3001
    "content-service"    = 3002
    "analytics-service"  = 3003
    "doubt-service"      = 3004
    "ai-service"         = 3005
    "notification-service" = 3006
    "payment-service"    = 3007
  }

  service_environments = {
    "api-gateway" = [
      { name = "NODE_ENV", value = var.environment },
      { name = "DB_HOST", value = aws_db_instance.main.address },
      { name = "DB_PORT", value = tostring(aws_db_instance.main.port) },
      { name = "REDIS_HOST", value = aws_elasticache_cluster.main.cache_nodes[0].address },
      { name = "JWT_SECRET", value = var.jwt_secret }
    ]
    # Similar configurations for other services...
  }
}