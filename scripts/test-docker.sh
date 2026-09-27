#!/bin/bash

# Test Docker build and run
# Usage: ./scripts/test-docker.sh

set -e

IMAGE_NAME="chemplus-pharma-test"
CONTAINER_NAME="chemplus-pharma-test-container"

echo "🧪 Testing Docker build and run..."

# Clean up any existing container
echo "🧹 Cleaning up existing containers..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Build the image
echo "📦 Building Docker image..."
docker build -t $IMAGE_NAME .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Get image size
    IMAGE_SIZE=$(docker images $IMAGE_NAME --format "{{.Size}}")
    echo "📊 Image size: $IMAGE_SIZE"
    
    # Run the container
    echo "🚀 Starting container..."
    docker run -d \
        --name $CONTAINER_NAME \
        -p 3000:3000 \
        -e NODE_ENV=production \
        -e RESEND_API_KEY=test_key \
        -e EMAIL_FROM=test@example.com \
        -e EMAIL_TO=test@example.com \
        -e NEXT_PUBLIC_APP_URL=http://localhost:3000 \
        $IMAGE_NAME
    
    # Wait for container to start
    echo "⏳ Waiting for container to be ready..."
    sleep 5
    
    # Check if container is running
    if docker ps | grep -q $CONTAINER_NAME; then
        echo "✅ Container is running!"
        
        # Test health endpoint
        echo "🏥 Testing health endpoint..."
        sleep 3
        if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
            echo "✅ Health check passed!"
            curl http://localhost:3000/api/health | jq . || curl http://localhost:3000/api/health
        else
            echo "⚠️  Health check failed. Check logs:"
            docker logs $CONTAINER_NAME
        fi
        
        # Show logs
        echo ""
        echo "📋 Container logs (last 20 lines):"
        docker logs --tail 20 $CONTAINER_NAME
        
        echo ""
        echo "✅ Test complete!"
        echo "🌐 Application should be available at: http://localhost:3000"
        echo "🛑 To stop: docker stop $CONTAINER_NAME"
        echo "🗑️  To remove: docker rm $CONTAINER_NAME"
    else
        echo "❌ Container failed to start. Logs:"
        docker logs $CONTAINER_NAME
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
