# CloudWatch Alarms
resource "aws_cloudwatch_metric_alarm" "api_gateway_5xx" {
  alarm_name          = "eduable-api-gateway-5xx-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "5XXError"
  namespace           = "AWS/ApiGateway"
  period              = "300"
  statistic           = "Sum"
  threshold           = "10"
  alarm_description   = "API Gateway 5XX errors exceeded threshold"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ApiName = aws_apigatewayv2_api.main.name
  }
}

resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "eduable-high-cpu-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "3"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "Average CPU utilization over 80%"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.api_gateway.name
  }
}

# SNS Topic for alerts
resource "aws_sns_topic" "alerts" {
  name = "eduable-alerts-${var.environment}"

  tags = {
    Environment = var.environment
  }
}

resource "aws_sns_topic_subscription" "alerts_email" {
  topic_arn = aws_sns_topic.alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}

# X-Ray tracing
resource "aws_xray_sampling_rule" "eduable" {
  rule_name      = "eduable-sampling-${var.environment}"
  priority       = 9000
  version        = 1
  reservoir_size = 1
  fixed_rate     = 0.05
  url_path       = "*"
  host           = "*"
  http_method    = "*"
  resource_arn   = "*"
  service_name   = "*"
  service_type   = "*"
}

# CloudWatch Logs for centralized logging
resource "aws_cloudwatch_log_group" "eduable" {
  name              = "/eduable/${var.environment}"
  retention_in_days = 30

  tags = {
    Environment = var.environment
  }
}