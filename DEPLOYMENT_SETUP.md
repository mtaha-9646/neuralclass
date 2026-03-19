# Neural Class Magazine - Deployment Guide

## Prerequisites

- VPS with Docker installed
- GitHub repository
- SSH access to VPS

## Setup Instructions

### 1. Prepare Your VPS

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system
apt update && apt upgrade -y

# Install Docker (if not already installed)
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Create app directory
mkdir -p /var/www/neural-class-magazine
cd /var/www/neural-class-magazine
```

### 2. Set Up GitHub Secrets

In your GitHub repository settings, add these secrets:

| Secret Name | Value | Example |
|------------|-------|---------|
| `VPS_IP` | Your VPS IP address | `123.45.67.89` |
| `VPS_USER` | SSH user (usually `root`) | `root` |
| `VPS_SSH_KEY` | Private SSH key for VPS | (your private key content) |
| `ADMIN_PASSWORD` | Admin password for the app | `your-secure-password` |
| `SLACK_WEBHOOK` | (Optional) Slack webhook for notifications | (webhook URL) |

**How to add secrets:**
1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each secret above

### 3. Generate SSH Key (if you don't have one)

On your local machine:
```bash
ssh-keygen -t ed25519 -C "github-actions"
# Save as: ~/.ssh/github_actions
# No passphrase
```

Then add the public key to your VPS:
```bash
# On VPS
echo "your-public-key-content" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

And add the private key to GitHub Secrets as `VPS_SSH_KEY`.

### 4. Manual Deployment (First Time)

If you want to manually deploy before using GitHub Actions:

```bash
./deploy.sh your-vps-ip root
```

Or with Docker Compose on VPS:
```bash
cd /var/www/neural-class-magazine
docker-compose up -d
```

### 5. Automatic Deployment via GitHub Actions

Once secrets are configured, every push to `main` will:

1. ✅ Run linting
2. ✅ Build the React app with Vite
3. ✅ Build Docker image
4. ✅ Push to GitHub Container Registry
5. ✅ SSH into VPS and deploy
6. ✅ Notify Slack (optional)

**Deployment flow:**
```
git push to main
    ↓
GitHub Actions triggered
    ↓
Build & test
    ↓
Build Docker image
    ↓
Push to registry
    ↓
SSH to VPS
    ↓
Pull latest image
    ↓
Stop old container
    ↓
Run new container
    ↓
Done! 🚀
```

### 6. Verify Deployment

Check deployment status:
```bash
# View workflow runs
https://github.com/yourusername/your-repo/actions

# SSH into VPS and check
ssh root@your-vps-ip
docker ps | grep neural-class-magazine
docker logs neural-class-magazine
```

### 7. Access Your Site

Your site will be available at:
- **HTTP**: `http://your-vps-ip`
- **Admin Login**: `/admin/login`
- **Default Password**: Check your `ADMIN_PASSWORD` secret

### 8. SSL/HTTPS Setup (Recommended)

Use Let's Encrypt with Certbot:

```bash
# On VPS
apt install certbot python3-certbot-nginx -y

# Get certificate (replace with your domain)
certbot certonly --standalone -d yourdomain.com

# Update nginx.conf with SSL configuration
```

Or use Cloudflare for free SSL.

## Troubleshooting

### Deployment fails to connect to VPS
- Check VPS IP is correct in secrets
- Verify SSH key is properly added to VPS
- Test SSH: `ssh -i ~/.ssh/github_actions root@your-vps-ip`

### Docker image won't pull
- Check GHCR authentication
- Ensure GitHub token has package write permissions
- Check container registry visibility

### Port already in use
```bash
# On VPS, find what's using ports 80/443
sudo lsof -i :80
sudo lsof -i :443

# Kill existing containers
docker stop neural-class-magazine
docker rm neural-class-magazine
```

### App not accessible
- Check firewall: `sudo ufw allow 80/tcp` and `sudo ufw allow 443/tcp`
- Verify nginx is running: `docker logs neural-class-magazine`
- Check app is building: look at GitHub Actions logs

## Environment Variables

The following can be configured via Docker environment variables:

```bash
docker run -d \
  -e VITE_ADMIN_PASSWORD=your-password \
  -e NODE_ENV=production \
  neural-class-magazine:latest
```

## Update Deployment

Simply push to `main` branch:
```bash
git add .
git commit -m "Update Neural Class"
git push origin main
```

GitHub Actions will automatically deploy!

## Rollback

If deployment goes wrong, revert and redeploy:
```bash
git revert HEAD
git push origin main
# GitHub Actions will deploy the previous version
```

## Support

For issues or questions, check:
- GitHub Actions logs: Repository → Actions tab
- VPS logs: `docker logs neural-class-magazine`
- Nginx logs: `docker exec neural-class-magazine cat /var/log/nginx/error.log`
