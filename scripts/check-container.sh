#!/bin/bash

# Quick container status checker
# Usage: ./scripts/check-container.sh

CONTAINER_NAME="chemplus-pharma-app"

echo "🔍 Checking container status..."
echo ""

# Check if container exists
if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "❌ Container '${CONTAINER_NAME}' not found"
    echo "💡 Run: docker run -d --name ${CONTAINER_NAME} -p 3000:3000 --env-file .env.production --restart unless-stopped chemplus-pharma:latest"
    exit 1
fi

# Check if running
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "✅ Container is RUNNING"
    STATUS="running"
else
    echo "⚠️  Container is STOPPED"
    STATUS="stopped"
fi

echo ""
echo "📊 Container Details:"
docker ps -a --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "📋 Recent Logs (last 20 lines):"
docker logs --tail 20 ${CONTAINER_NAME} 2>&1

echo ""
if [ "$STATUS" = "running" ]; then
    echo "🌐 Testing connection..."
    if curl -f -s http://localhost:3000/api/health > /dev/null 2>&1; then
        echo "✅ Application is responding!"
        curl -s http://localhost:3000/api/health | jq . 2>/dev/null || curl -s http://localhost:3000/api/health
    else
        echo "❌ Application not responding on port 3000"
        echo "💡 Check logs: docker logs -f ${CONTAINER_NAME}"
    fi
else
    echo "💡 To start: docker start ${CONTAINER_NAME}"
    echo "💡 Or create new: docker run -d --name ${CONTAINER_NAME} -p 3000:3000 --env-file .env.production --restart unless-stopped chemplus-pharma:latest"
fi
