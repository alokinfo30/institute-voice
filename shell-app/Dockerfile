FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.ts ./
COPY tsconfig*.json ./
COPY index.html ./

RUN npm ci

COPY src/ ./src/
COPY public/ ./public/

RUN npm run build

FROM nginx:alpine AS production

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 5173

# Start nginx
CMD ["nginx", "-g", "daemon off;"]