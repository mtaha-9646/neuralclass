#!/bin/bash
set -e

echo "Neural Class Magazine - Deployment Script"
echo "=========================================="

# Configuration
VPS_IP=${1:-"your-vps-ip"}
VPS_USER=${2:-"root"}
APP_NAME="neural-class-magazine"
DEPLOY_PATH="/var/www/$APP_NAME"

if [ "$VPS_IP" = "your-vps-ip" ]; then
    echo "Usage: ./deploy.sh <VPS_IP> [VPS_USER]"
    exit 1
fi

echo "Deploying to $VPS_IP..."

# Build locally
echo "Building application..."
npm run build

# Create deployment archive
echo "Preparing deployment..."
tar -czf dist.tar.gz dist nginx.conf Dockerfile docker-compose.yml .env.example

# Upload to VPS
echo "Uploading files..."
scp -r dist.tar.gz package.json package-lock.json "$VPS_USER@$VPS_IP:/tmp/"

# Deploy on VPS
echo "Running deployment on server..."
ssh "$VPS_USER@$VPS_IP" << 'DEPLOY_SCRIPT'
    cd /tmp
    mkdir -p /var/www/neural-class-magazine
    tar -xzf dist.tar.gz -C /var/www/neural-class-magazine
    cp package*.json /var/www/neural-class-magazine/
    
    cd /var/www/neural-class-magazine
    
    # Docker deployment
    docker build -t neural-class-magazine:latest .
    docker stop neural-class-magazine || true
    docker rm neural-class-magazine || true
    docker run -d \
        --name neural-class-magazine \
        -p 80:80 \
        -p 443:443 \
        -e VITE_ADMIN_PASSWORD=admin123 \
        neural-class-magazine:latest
    
    echo "Deployment complete!"
    docker ps | grep neural-class-magazine
DEPLOY_SCRIPT

# Cleanup
rm dist.tar.gz

echo "Deployment successful!"
echo "Visit: http://$VPS_IP"
