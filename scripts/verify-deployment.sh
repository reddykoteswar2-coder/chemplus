#!/bin/bash

# Post-deployment verification script
# Usage: ./scripts/verify-deployment.sh

set -e

CONTAINER_NAME="chemplus-pharma-app"
BASE_URL="${1:-http://localhost:3000}"

echo "🔍 Verifying deployment..."
echo ""

# Check if container is running
echo "1️⃣ Checking container status..."
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "   ✅ Container is running"
    CONTAINER_RUNNING=true
else
    echo "   ❌ Container is not running"
    echo "   💡 Start with: docker run -d --name ${CONTAINER_NAME} -p 3000:3000 --env-file .env.production --restart unless-stopped chemplus-pharma:latest"
    CONTAINER_RUNNING=false
fi

echo ""

# Check health endpoint
if [ "$CONTAINER_RUNNING" = true ]; then
    echo "2️⃣ Checking health endpoint..."
    if curl -f -s "${BASE_URL}/api/health" > /dev/null 2>&1; then
        echo "   ✅ Health check passed"
        HEALTH_RESPONSE=$(curl -s "${BASE_URL}/api/health")
        echo "   Response: $HEALTH_RESPONSE"
    else
        echo "   ❌ Health check failed"
        echo "   💡 Check logs: docker logs ${CONTAINER_NAME}"
    fi
else
    echo "   ⏭️  Skipping (container not running)"
fi

echo ""

# Check main pages
if [ "$CONTAINER_RUNNING" = true ]; then
    echo "3️⃣ Checking main pages..."
    
    PAGES=("/" "/about" "/products" "/services" "/contact")
    ALL_PAGES_OK=true
    
    for page in "${PAGES[@]}"; do
        if curl -f -s -o /dev/null -w "%{http_code}" "${BASE_URL}${page}" | grep -q "200"; then
            echo "   ✅ ${page}"
        else
            echo "   ❌ ${page} (failed)"
            ALL_PAGES_OK=false
        fi
    done
    
    if [ "$ALL_PAGES_OK" = true ]; then
        echo "   ✅ All pages are accessible"
    fi
else
    echo "   ⏭️  Skipping (container not running)"
fi

echo ""

# Check container resources
if [ "$CONTAINER_RUNNING" = true ]; then
    echo "4️⃣ Container resource usage:"
    docker stats --no-stream ${CONTAINER_NAME} --format "   CPU: {{.CPUPerc}} | Memory: {{.MemUsage}}"
fi

echo ""

# Check environment variables
if [ "$CONTAINER_RUNNING" = true ]; then
    echo "5️⃣ Checking environment variables..."
    RESEND_KEY=$(docker exec ${CONTAINER_NAME} env | grep RESEND_API_KEY | cut -d= -f2)
    if [ -n "$RESEND_KEY" ] && [ "$RESEND_KEY" != "" ]; then
        echo "   ✅ RESEND_API_KEY is set"
    else
        echo "   ⚠️  RESEND_API_KEY is not set"
    fi
    
    NODE_ENV=$(docker exec ${CONTAINER_NAME} env | grep NODE_ENV | cut -d= -f2)
    echo "   NODE_ENV: ${NODE_ENV:-not set}"
fi

echo ""

# Check recent logs for errors
if [ "$CONTAINER_RUNNING" = true ]; then
    echo "6️⃣ Recent logs (checking for errors)..."
    ERROR_COUNT=$(docker logs --tail 50 ${CONTAINER_NAME} 2>&1 | grep -i "error" | wc -l | tr -d ' ')
    if [ "$ERROR_COUNT" -eq 0 ]; then
        echo "   ✅ No errors in recent logs"
    else
        echo "   ⚠️  Found $ERROR_COUNT error(s) in logs"
        echo "   💡 View full logs: docker logs ${CONTAINER_NAME}"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ "$CONTAINER_RUNNING" = true ]; then
    echo "✅ Deployment verification complete!"
    echo ""
    echo "🌐 Application URL: ${BASE_URL}"
    echo "📊 View logs: docker logs -f ${CONTAINER_NAME}"
    echo "🔄 Restart: docker restart ${CONTAINER_NAME}"
else
    echo "❌ Container is not running. Please start it first."
    echo ""
    echo "💡 Start with: docker run -d --name ${CONTAINER_NAME} -p 3000:3000 --env-file .env.production --restart unless-stopped chemplus-pharma:latest"
fi
