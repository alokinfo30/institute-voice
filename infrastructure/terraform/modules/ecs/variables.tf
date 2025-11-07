variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "private_subnet_ids" {
  description = "Private subnet IDs"
  type        = list(string)
}

variable "public_subnet_ids" {
  description = "Public subnet IDs"
  type        = list(string)
}

variable "ecr_repository_urls" {
  description = "ECR repository URLs for services"
  type        = map(string)
}

variable "desired_count" {
  description = "Desired number of tasks"
  type        = number
  default     = 2
}

variable "cpu" {
  description = "CPU units for tasks"
  type        = number
  default     = 512
}

variable "memory" {
  description = "Memory for tasks"
  type        = number
  default     = 1024
}

variable "auto_scaling_config" {
  description = "Auto scaling configuration"
  type = object({
    min_capacity     = number
    max_capacity     = number
    target_cpu       = number
    target_memory    = number
    scale_in_cooldown  = number
    scale_out_cooldown = number
  })
  default = {
    min_capacity     = 2
    max_capacity     = 10
    target_cpu       = 75
    target_memory    = 75
    scale_in_cooldown  = 300
    scale_out_cooldown = 60
  }
}