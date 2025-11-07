#!/bin/bash

# Install core dependencies
npm install -g typescript@latest
npm install -g lerna@latest

# Initialize lerna
lerna init

# Install dependencies for each service
lerna bootstrap

# Install AI/ML dependencies
npm install @tensorflow/tfjs-node @tensorflow/tfjs-node-gpu

# Install security dependencies
npm install helmet express-rate-limit cors express-jwt jsonwebtoken bcrypt

# Install caching dependencies
npm install ioredis redis-commander

# Install monitoring dependencies
npm install prometheus-client grafana-dash-gen

# Install frontend dependencies
cd shell-app
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install @tanstack/react-query zustand vite @vitejs/plugin-react
cd ..

# Install backend dependencies
cd services/api-gateway
npm install express express-validator winston morgan
cd ../..

# Install database dependencies
cd services/shared
npm install mongoose typeorm prisma @prisma/client
cd ../..

# Install testing dependencies
npm install -D jest @types/jest supertest @testing-library/react @testing-library/jest-dom

# Install development tools
npm install -D eslint prettier husky lint-staged

# Create development certificates
mkdir -p certificates
openssl req -x509 -newkey rsa:4096 -keyout certificates/key.pem -out certificates/cert.pem -days 365 -nodes

# Initialize git hooks
npx husky install
npx husky add .husky/pre-commit "npm run lint-staged"

# Build all packages
lerna run build

echo "Installation complete! Run 'npm start' to start the development servers."