# Simple Node dev Dockerfile for auth service
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# Install all deps (including dev) so we can run TS with ts-node for local dev
RUN npm install
COPY . .
EXPOSE 4001
CMD ["npx","ts-node","src/index.ts"]
