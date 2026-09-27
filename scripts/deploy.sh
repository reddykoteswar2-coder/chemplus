#!/bin/bash

# Deployment script for EC2
# Usage: ./scripts/deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
ENV_FILE=".env.${ENVIRONMENT}"

echo "🚀 Starting deployment for ${ENVIRONMENT} environment..."

# Check if environment file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: Environment file ${ENV_FILE} not found!"
    echo "📝 Please copy .env.example to ${ENV_FILE} and configure it."
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running!"
    exit 1
fi

CONTAINER_NAME="chemplus-pharma-app"
IMAGE_NAME="chemplus-pharma:latest"

echo "📦 Building Docker image..."
docker build -t ${IMAGE_NAME} .

echo "🔄 Stopping existing containers..."
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    docker stop ${CONTAINER_NAME} > /dev/null 2>&1
    docker rm ${CONTAINER_NAME} > /dev/null 2>&1
fi

echo "🚀 Starting container..."
docker run -d \
  --name ${CONTAINER_NAME} \
  -p 3000:3000 \
  --env-file ${ENV_FILE} \
  --restart unless-stopped \
  ${IMAGE_NAME}

echo "⏳ Waiting for application to be ready..."
sleep 10

# Health check
echo "🏥 Checking application health..."
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is healthy!"
else
    echo "⚠️  Warning: Health check failed. Check logs with: docker logs ${CONTAINER_NAME}"
fi

echo "📊 Container status:"
docker ps --filter "name=${CONTAINER_NAME}"

echo "✅ Deployment complete!"
echo "📝 View logs with: docker logs -f ${CONTAINER_NAME}"
echo "🌐 Application should be available at: http://localhost:3000"
