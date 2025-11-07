output "load_balancer_dns" {
  description = "DNS name of the load balancer"
  value       = aws_lb.main.dns_name
}

output "api_gateway_url" {
  description = "URL for the API Gateway"
  value       = "http://${aws_lb.main.dns_name}"
}

output "frontend_url" {
  description = "URL for the frontend application"
  value       = "http://${aws_lb.main.dns_name}"
}

output "database_endpoint" {
  description = "Database connection endpoint"
  value       = aws_db_instance.main.endpoint
  sensitive   = true
}

output "redis_endpoint" {
  description = "Redis connection endpoint"
  value       = aws_elasticache_cluster.main.cache_nodes[0].address
}