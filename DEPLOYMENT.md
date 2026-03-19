# Deployment Guide - Neural Class Magazine

Complete guide to deploying Neural Class to production.

## Prerequisites

- VPS with Ubuntu/Debian
- Docker and Docker Compose installed
- Domain name (optional but recommended)
- SSH access to VPS

## Quick Deploy (Recommended)

### 1. Prepare Your VPS

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

### 2. Deploy Application

```bash
# On your local machine
./deploy.sh your-vps-ip root
```

The script will:
- Build production bundle
- Upload files to VPS
- Create Docker container
- Start the application

### 3. Verify Deployment

```bash
# Check if container is running
docker ps | grep neural-class-magazine

# Check logs
docker logs neural-class-magazine

# Test the application
curl http://your-vps-ip
```

## Manual Deployment

### 1. Build Locally

```bash
npm run build
```

### 2. Upload to VPS

```bash
scp -r dist/ Dockerfile docker-compose.yml .env root@your-vps-ip:/var/www/neural-class/
scp package.json package-lock.json root@your-vps-ip:/var/www/neural-class/
```

### 3. Deploy on VPS

```bash
ssh root@your-vps-ip

cd /var/www/neural-class

# Build and start
docker build -t neural-class-magazine:latest .
docker run -d \
    --name neural-class-magazine \
    -p 80:80 \
    -p 443:443 \
    -e VITE_ADMIN_PASSWORD=your_secure_password \
    neural-class-magazine:latest
```

## With Custom Domain & HTTPS

### 1. Set Up Nginx Reverse Proxy

```bash
# SSH into VPS
ssh root@your-vps-ip

# Create Nginx config
sudo nano /etc/nginx/sites-available/neural-class

# Add this configuration:
server {
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
```

### 3. Update Docker Container

Change port mapping in Dockerfile or docker-compose.yml:

```yaml
ports:
  - "8080:80"  # Run on 8080, Nginx handles port 80/443
```

## Environment Variables

Create `.env` on your VPS:

```bash
VITE_ADMIN_PASSWORD=your_secure_password_here
```

Make sure to use a strong password for production!

## Monitoring & Logs

```bash
# View real-time logs
docker logs -f neural-class-magazine

# Check container status
docker ps

# View resource usage
docker stats neural-class-magazine

# SSH into container
docker exec -it neural-class-magazine sh
```

## Updates & Maintenance

### Update Application

```bash
# On your local machine
git pull
npm install
npm run build
./deploy.sh your-vps-ip root
```

### Backup Data

Data is stored in localStorage on client. To preserve custom articles/tools:

```bash
# Backup your database (localStorage)
# Users should export their data from admin panel or
# You can implement server-side backup

# For production, consider adding a backend database
```

### Database Considerations

Current version uses localStorage. For production with multiple users, consider:

1. **Add Backend Database**
   - Node.js Express + MongoDB
   - PostgreSQL with Node.js
   - Firebase Realtime Database

2. **Example with Firebase**
   ```javascript
   // Store data in Firestore instead of localStorage
   // Implement user authentication
   // Real-time sync across devices
   ```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs neural-class-magazine

# Common issues:
# - Port 80/443 already in use: change port mapping
# - Out of memory: increase Docker memory limit
# - Environment variables not set: check .env file
```

### High memory usage

```bash
# Reduce memory limit if needed
docker run -d \
    --name neural-class-magazine \
    -m 512m \
    -p 80:80 \
    ...
```

### Data not persisting

- localStorage only persists per browser
- Add server-side database for multi-device access
- Implement cloud backup for data safety

### Performance issues

1. Check container logs for errors
2. Monitor resource usage: `docker stats`
3. Verify Gzip compression is enabled in Nginx
4. Consider CDN for images

## Security Best Practices

1. **Use Strong Admin Password**
   ```
   VITE_ADMIN_PASSWORD=generate_strong_random_password
   ```

2. **Keep Software Updated**
   ```bash
   docker pull node:18-alpine
   docker build --no-cache -t neural-class-magazine:latest .
   ```

3. **Use HTTPS**
   - Get SSL certificate from Let's Encrypt
   - Force HTTPS redirects

4. **Rate Limiting**
   - Add Nginx rate limiting
   - Protect admin endpoints

5. **Firewall**
   ```bash
   ufw enable
   ufw allow 22
   ufw allow 80
   ufw allow 443
   ```

## Performance Optimization

### 1. Enable Caching

Already configured in nginx.conf:
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. Use CDN

- Cloudflare (free tier available)
- AWS CloudFront
- BunnyCDN

### 3. Database Optimization

- For larger deployments, add database
- Implement pagination for articles/tools
- Cache frequently accessed data

## Scaling

For high traffic:

1. **Load Balancing**
   - Deploy multiple Docker containers
   - Use Nginx upstream

2. **Database Scaling**
   - Implement server with persistent database
   - Distribute across regions

3. **CDN Integration**
   - Serve static assets from CDN
   - Cache API responses

## Rollback

If deployment fails:

```bash
# Stop current container
docker stop neural-class-magazine
docker rm neural-class-magazine

# Deploy previous version
docker run -d \
    --name neural-class-magazine \
    -p 80:80 \
    neural-class-magazine:previous
```

## Support & Help

- Check logs: `docker logs neural-class-magazine`
- Review Nginx config: `/etc/nginx/nginx.conf`
- Check Node process: `ps aux | grep node`

## Costs

VPS Hosting Estimates:
- Starter: $5-10/month (1GB RAM, 25GB SSD)
- Standard: $15-20/month (2GB RAM, 50GB SSD)
- Production: $30-50/month (4GB RAM, 100GB SSD)

Recommended for production: Standard or Production tier
