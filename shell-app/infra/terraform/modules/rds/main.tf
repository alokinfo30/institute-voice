# RDS module scaffold
resource "aws_db_instance" "this" {
  allocated_storage    = var.allocated_storage
  engine               = "postgres"
  engine_version       = var.engine_version
  instance_class       = var.instance_class
  name                 = var.name
  username             = var.username
  password             = var.password
  skip_final_snapshot  = true
}

output "rds_endpoint" {
  value = aws_db_instance.this.address
}
