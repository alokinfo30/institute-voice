output "rds_endpoint" {
  description = "RDS endpoint"
  value       = aws_db_instance.postgres.address
}

output "vpc_id" {
  value = module.vpc.vpc_id
}
