# Terraform infra (scaffold)

This folder contains a minimal Terraform scaffold for the Eduable platform.

Notes:
- These are example modules and placeholders. Replace or extend them for production.
- Keep secrets (DB password, etc.) out of the repository. Use Terraform variables or a secrets manager.

Quick start (local dev):

1. Install Terraform >= 1.0
2. cd infra/terraform
3. terraform init
4. terraform plan -var="db_password=your_secret"
5. terraform apply -var="db_password=your_secret" -auto-approve

Important: This is a scaffold. Do not use defaults for production credentials.
