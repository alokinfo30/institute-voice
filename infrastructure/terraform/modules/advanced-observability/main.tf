# Centralized logging
resource "aws_cloudwatch_log_group" "application" {
  name              = "/eduable/application"
  retention_in_days = 90

  tags = {
    Environment = var.environment
  }
}

resource "aws_cloudwatch_log_group" "security" {
  name              = "/eduable/security"
  retention_in_days = 365

  tags = {
    Environment = var.environment
  }
}

# Application Performance Monitoring
resource "aws_cloudwatch_rum_app_monitor" "eduable" {
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

# Synthetic monitoring
resource "aws_synthetics_canary" "critical_flows" {
  for_each = {
    login          = "/api/auth/login"
    course_access  = "/api/courses"
    video_playback = "/api/content/video"
    payment        = "/api/payment/checkout"
  }

  name                 = "eduable-${each.key}-${var.environment}"
  artifact_s3_location = "s3://${aws_s3_bucket.monitoring.bucket}/canary/${each.key}/"
  execution_role_arn   = aws_iam_role.canary.arn
  handler              = "pageLoadBlueprint.handler"
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

# Business metrics dashboard
resource "aws_cloudwatch_dashboard" "business" {
  dashboard_name = "EduAble-Business-${var.environment}"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        x      = 0
        y      = 0
        width  = 8
        height = 6

        properties = {
          metrics = [
            ["EduAble/Business", "ActiveStudents", "Environment", var.environment],
            [".", "NewEnrollments", ".", "."],
            [".", "CourseCompletions", ".", "."]
          ]
          view    = "timeSeries"
          stacked = false
          region  = var.aws_region
          title   = "Student Engagement Metrics"
          period  = 3600
          stat    = "Sum"
        }
      },
      {
        type   = "metric"
        x      = 8
        y      = 0
        width  = 8
        height = 6

        properties = {
          metrics = [
            ["EduAble/Business", "Revenue", "Environment", var.environment],
            [".", "ARPU", ".", "."],
            [".", "ChurnRate", ".", "."]
          ]
          view    = "timeSeries"
          stacked = false
          region  = var.aws_region
          title   = "Revenue Metrics"
          period  = 86400
          stat    = "Average"
        }
      }
    ]
  })
}

# Custom metrics alarm
resource "aws_cloudwatch_metric_alarm" "high_churn_rate" {
  alarm_name          = "eduable-high-churn-rate-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "ChurnRate"
  namespace           = "EduAble/Business"
  period              = 86400
  statistic           = "Average"
  threshold           = "0.1" # 10% churn rate
  alarm_description   = "Churn rate exceeded 10%"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    Environment = var.environment
  }
}