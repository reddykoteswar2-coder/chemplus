#!/bin/bash

# Script to build and run the Docker image
# Usage: ./scripts/run-docker.sh

set -e

CONTAINER_NAME="chemplus-pharma-app"
IMAGE_NAME="chemplus-pharma:latest"
ENV_FILE=".env.production"

echo "🔍 Checking Docker status..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running!"
    echo ""
    echo "Please start Docker Desktop and try again."
    echo "On macOS: Open Docker Desktop from Applications"
    exit 1
fi

echo "✅ Docker is running"
echo ""

# Check if .env.production exists
if [ ! -f "$ENV_FILE" ]; then
    echo "⚠️  Warning: $ENV_FILE not found"
    echo "Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example "$ENV_FILE"
        echo "📝 Please edit $ENV_FILE and add your RESEND_API_KEY"
        echo "   Then run this script again."
        exit 1
    else
        echo "❌ .env.example not found either!"
        exit 1
    fi
fi

echo "✅ Environment file found: $ENV_FILE"
echo ""

# Stop and remove existing container if it exists
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "🔄 Stopping existing container..."
    docker stop ${CONTAINER_NAME} > /dev/null 2>&1 || true
    docker rm ${CONTAINER_NAME} > /dev/null 2>&1 || true
    echo "✅ Old container removed"
    echo ""
fi

# Build the image
echo "📦 Building Docker image..."
docker build -t ${IMAGE_NAME} .

if [ $? -eq 0 ]; then
    echo "✅ Image built successfully"
    echo ""
else
    echo "❌ Build failed!"
    exit 1
fi

# Run the container
echo "🚀 Starting container..."
docker run -d \
  --name ${CONTAINER_NAME} \
  -p 3000:3000 \
  --env-file ${ENV_FILE} \
  --restart unless-stopped \
  ${IMAGE_NAME}

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully"
    echo ""
else
    echo "❌ Failed to start container!"
    exit 1
fi

# Wait a bit for the app to start
echo "⏳ Waiting for application to start..."
sleep 5

# Check container status
echo "📊 Container status:"
docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""

# Check logs
echo "📋 Recent logs:"
docker logs --tail 20 ${CONTAINER_NAME}
echo ""

# Health check
echo "🏥 Checking health endpoint..."
if curl -f -s http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is healthy!"
    echo ""
    HEALTH_RESPONSE=$(curl -s http://localhost:3000/api/health)
    echo "Response: $HEALTH_RESPONSE"
    echo ""
    echo "🌐 Application is available at: http://localhost:3000"
else
    echo "⚠️  Health check failed (application may still be starting)"
    echo "💡 Check logs with: docker logs -f ${CONTAINER_NAME}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Useful commands:"
echo "   View logs:    docker logs -f ${CONTAINER_NAME}"
echo "   Stop:         docker stop ${CONTAINER_NAME}"
echo "   Restart:      docker restart ${CONTAINER_NAME}"
echo "   Remove:       docker stop ${CONTAINER_NAME} && docker rm ${CONTAINER_NAME}"
echo ""
