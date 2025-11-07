# Advanced monitoring and observability
resource "aws_cloudwatch_dashboard" "eduable" {
  dashboard_name = "EduAble-${var.environment}"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 12
        height = 6

        properties = {
          metrics = [
            ["AWS/ApiGateway", "Count", "ApiName", aws_apigatewayv2_api.main.name],
            [".", "5XXError", ".", "."],
            [".", "4XXError", ".", "."]
          ]
          view    = "timeSeries"
          stacked = false
          region  = var.aws_region
          title   = "API Gateway Requests and Errors"
          period  = 300
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 0
        width  = 12
        height = 6

        properties = {
          metrics = [
            ["AWS/ECS", "CPUUtilization", "ServiceName", "eduable-api-gateway-${var.environment}", "ClusterName", aws_ecs_cluster.main.name],
            [".", "MemoryUtilization", ".", ".", ".", "."]
          ]
          view    = "timeSeries"
          stacked = false
          region  = var.aws_region
          title   = "ECS Service Utilization"
          period  = 300
        }
      }
    ]
  })
}

# X-Ray tracing
resource "aws_xray_group" "eduable" {
  group_name        = "eduable-${var.environment}"
  filter_expression = "service(\"eduable-*\")"
}

# Synthetic monitoring
resource "aws_synthetics_canary" "eduable" {
  name                 = "eduable-health-check-${var.environment}"
  artifact_s3_location = "s3://${aws_s3_bucket.monitoring.bucket}/canary/"
  execution_role_arn   = aws_iam_role.canary.arn
  handler              = "apiCanaryBlueprint.handler"
  zip_file             = "canary.zip"
  runtime_version      = "syn-nodejs-puppeteer-3.8"

  schedule {
    expression = "rate(5 minutes)"
  }

  run_config {
    timeout_in_seconds = 60
    memory_in_mb       = 960
    active_tracing     = true
  }

  tags = {
    Environment = var.environment
  }
}

# Real User Monitoring (RUM)
resource "aws_rum_app_monitor" "eduable" {
  name   = "eduable-rum-${var.environment}"
  domain = var.domain_name

  app_monitor_configuration {
    session_sample_rate = 0.1
    allowed_origins     = [var.domain_name]

    telemetries = ["errors", "performance", "http"]
  }

  tags = {
    Environment = var.environment
  }
}