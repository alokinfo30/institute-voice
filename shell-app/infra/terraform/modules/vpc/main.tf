# VPC module scaffold
resource "aws_vpc" "this" {
  cidr_block = var.cidr
  tags = var.tags
}

output "vpc_id" {
  value = aws_vpc.this.id
}
