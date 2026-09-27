# TOMVIS Framework Website - Production Deployment & Operations Guide

## Production Environment Overview

- **Production URL**: [https://tomvisolution.tech](https://tomvisolution.tech)
- **Alternate URL**: [https://www.tomvisolution.tech](https://www.tomvisolution.tech)
- **VPS Operating System**: Ubuntu 24.04 LTS
- **VPS Public IP**: `187.77.142.59`
- **Application Directory**: `/var/www/tomvisweb`
- **Application Port (Internal Loopback)**: `127.0.0.1:3000`
- **Process Manager**: PM2
- **PM2 Process Name**: `tomvisweb`
- **Web Server / Reverse Proxy**: Nginx with Let's Encrypt SSL
- **Node.js Runtime**: v22.x LTS

---

## Production Architecture Flow

```
Internet (Clients / Browsers)
      │
      ▼ (Port 443 / HTTPS)
[ Let's Encrypt SSL Termination ]
      │
      ▼
[ Nginx Reverse Proxy (:443) ]
  - HTTP Strict Transport Security (HSTS)
  - Rate Limiting & Gzip Compression
  - Header Hardening
      │
      ▼ (Reverse Proxy HTTP pass)
[ 127.0.0.1:3000 (Internal Only - Not WAN exposed) ]
      │
      ▼
[ Next.js 16 Application Runtime ]
      ▲
      │ (Managed by)
[ PM2 Process Manager: tomvisweb ]
```

---

## 🚀 One-Command Deployment (Recommended)

To deploy updates safely with automated linting, building, and fail-safe PM2 restart:

```bash
cd /var/www/tomvisweb
bash scripts/deploy.sh
```

---

## 🛠 Manual Step-by-Step Deployment Procedure

If you prefer to perform deployment commands manually:

```bash
# 1. Navigate to production workspace
cd /var/www/tomvisweb

# 2. Fetch latest changes from main branch
git pull origin main

# 3. Install production dependencies cleanly
npm install

# 4. Verify code quality and static typing
npm run lint

# 5. Build Next.js production bundle
npm run build

# 6. Restart PM2 application process with zero-downtime
pm2 restart tomvisweb

# 7. Persist PM2 process configuration across system reboots
pm2 save

# 8. Check runtime status
pm2 status
```

---

## 🩺 System Health Check

Run the comprehensive health check suite:

```bash
cd /var/www/tomvisweb
bash scripts/health-check.sh
```

This verifies:
1. Node.js & npm versions
2. PM2 status & memory footprint
3. Nginx service status
4. Internal port `3000` loopback connectivity (`http://127.0.0.1:3000`)
5. Public production HTTPS status (`https://tomvisolution.tech`)
6. SSL certificate validity

---

## 🔒 Nginx Reverse Proxy Configuration Reference

File location: `/etc/nginx/sites-available/tomvisweb` (linked to `sites-enabled/tomvisweb`)

```nginx
server {
    server_name tomvisolution.tech www.tomvisolution.tech;

    # Security Headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/tomvisolution.tech/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tomvisolution.tech/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.tomvisolution.tech) {
        return 301 https://$host$request_uri;
    }
    if ($host = tomvisolution.tech) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    server_name tomvisolution.tech www.tomvisolution.tech;
    return 404;
}
```

---

## 🔄 Emergency Rollback Procedure

If a deployed build produces an unexpected issue on production:

```bash
cd /var/www/tomvisweb

# Revert to previous git commit
git log -n 5 --oneline
git checkout HEAD~1

# Re-install dependencies & rebuild
npm install
npm run build

# Restart PM2
pm2 restart tomvisweb
pm2 save
```
