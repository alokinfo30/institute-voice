FROM node:18-alpine AS builder

# Install Python and build dependencies for TensorFlow
RUN apk add --no-cache \
    python3 \
    py3-pip \
    make \
    g++ \
    && ln -sf python3 /usr/bin/python

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci --only=production && npm cache clean --force

COPY src/ ./src/
COPY nest-cli.json ./

RUN npm run build

FROM node:18-alpine AS production

# Install runtime dependencies
RUN apk add --no-cache python3

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001

COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY package*.json ./

USER nestjs

CMD ["node", "dist/main"]