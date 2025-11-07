module "eduable" {
  source = "../../modules"

  environment = "production"
  aws_region  = "us-east-1"

  # Networking
  vpc_cidr = "10.0.0.0/16"
  
  # Database
  database = {
    instance_class    = "db.r5.2xlarge"
    allocated_storage = 500
    multi_az          = true
    backup_retention  = 35
  }

  # Redis
  redis = {
    node_type       = "cache.r6g.2xlarge"
    num_cache_nodes = 3
  }

  # ECS Configuration
  ecs = {
    desired_count = 3
    cpu           = 1024
    memory        = 2048
  }

  # Auto Scaling
  auto_scaling = {
    min_capacity     = 3
    max_capacity     = 50
    target_cpu       = 70
    target_memory    = 80
    scale_in_cooldown  = 300
    scale_out_cooldown = 60
  }

  # CDN & DNS
  domain_name = "eduable.com"
  subdomains  = ["app", "api", "cdn", "admin"]

  # Monitoring
  monitoring = {
    enabled            = true
    retention_days     = 90
    alert_email        = "alerts@eduable.com"
    slack_webhook_url  = var.slack_webhook_url
  }

  # Security
  security = {
    waf_enabled      = true
    shield_enabled   = true
    guardduty_enabled = true
    security_hub_enabled = true
  }

  # Backup & DR
  backup = {
    enabled         = true
    schedule        = "cron(0 2 * * ? *)" # Daily at 2 AM
    retention_days  = 35
    cross_region    = true
  }
}

# Multi-region deployment for DR
module "eduable_dr" {
  source = "../../modules"

  environment = "production-dr"
  aws_region  = "us-west-2"

  providers = {
    aws = aws.oregon
  }

  # Reduced capacity for DR region
  database = {
    instance_class    = "db.r5.large"
    allocated_storage = 100
    multi_az          = false
  }

  ecs = {
    desired_count = 1
    cpu           = 512
    memory        = 1024
  }

  auto_scaling = {
    min_capacity = 1
    max_capacity = 10
  }
}

# Global Accelerator for improved global performance
resource "aws_globalaccelerator_accelerator" "eduable" {
  name            = "eduable-production"
  ip_address_type = "IPV4"
  enabled         = true

  attributes {
    flow_logs_enabled   = true
    flow_logs_s3_bucket = aws_s3_bucket.monitoring.bucket
    flow_logs_s3_prefix = "global-accelerator-logs/"
  }
}

resource "aws_globalaccelerator_listener" "eduable" {
  accelerator_arn = aws_globalaccelerator_accelerator.eduable.id
  client_affinity = "NONE"
  protocol        = "TCP"

  port_range {
    from_port = 80
    to_port   = 80
  }

  port_range {
    from_port = 443
    to_port   = 443
  }
}

# WAF Web ACL for advanced protection
resource "aws_wafv2_web_acl" "eduable" {
  name        = "eduable-production"
  description = "WAF for EduAble production"
  scope       = "REGIONAL"

  default_action {
    allow {}
  }

  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 1

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "AWSManagedRulesCommonRuleSet"
      sampled_requests_enabled   = true
    }
  }

  rule {
    name     = "RateLimit"
    priority = 2

    action {
      block {}
    }

    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimit"
      sampled_requests_enabled   = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "eduable-waf"
    sampled_requests_enabled   = true
  }
}