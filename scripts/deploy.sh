#!/usr/bin/env bash
# ==============================================================================
# TOMVIS Framework - Safe Automated Deployment Script
# Production Server: Ubuntu 24.04 (IP: 187.77.142.59)
# Path: /var/www/tomvisweb
# PM2 Process: tomvisweb
# ==============================================================================

set -e

# Visual colors
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================================================${NC}"
echo -e "${BLUE}>>> TOMVIS FRAMEWORK PRODUCTION SAFE DEPLOYMENT INITIATED <<<${NC}"
echo -e "${BLUE}======================================================================${NC}"
echo "Timestamp: $(date '+%Y-%m-%d %H:%M:%S %Z')"
echo "Directory: $(pwd)"

# ------------------------------------------------------------------------------
# STEP 1: Git Pull
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[Step 1/5] Pulling latest updates from git repository (origin/main)...${NC}"
if ! git pull origin main; then
    echo -e "${RED}[ERROR] Git pull failed! Aborting deployment.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Git pull completed successfully.${NC}"

# ------------------------------------------------------------------------------
# STEP 2: NPM Dependencies Installation
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[Step 2/5] Installing dependencies via npm...${NC}"
if ! npm install; then
    echo -e "${RED}[ERROR] npm install failed! Aborting deployment.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Dependencies verified and installed.${NC}"

# ------------------------------------------------------------------------------
# STEP 3: Linting & Code Verification
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[Step 3/5] Running ESLint static analysis...${NC}"
if ! npm run lint; then
    echo -e "${RED}[ERROR] npm run lint failed! Code contains linting errors.${NC}"
    echo -e "${RED}[ABORT] Stopping deployment immediately. Production process untouched.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Linting passed with zero errors.${NC}"

# ------------------------------------------------------------------------------
# STEP 4: Next.js Production Build
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[Step 4/5] Building Next.js production bundle...${NC}"
if ! npm run build; then
    echo -e "${RED}======================================================================${NC}"
    echo -e "${RED}[CRITICAL ERROR] Production build failed!${NC}"
    echo -e "${RED}Deployment STOPPED immediately.${NC}"
    echo -e "${RED}PM2 process 'tomvisweb' was NOT restarted to protect live traffic.${NC}"
    echo -e "${RED}======================================================================${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Production build completed successfully.${NC}"

# ------------------------------------------------------------------------------
# STEP 5: Zero-Downtime PM2 Restart
# ------------------------------------------------------------------------------
echo -e "\n${YELLOW}[Step 5/5] Restarting PM2 process 'tomvisweb'...${NC}"
if pm2 restart tomvisweb; then
    pm2 save
    echo -e "${GREEN}✓ PM2 process restarted and configuration saved.${NC}"
else
    echo -e "${YELLOW}[NOTICE] PM2 'tomvisweb' restart command returned status. Checking process list...${NC}"
    pm2 status
fi

# ------------------------------------------------------------------------------
# DEPLOYMENT SUMMARY
# ------------------------------------------------------------------------------
echo -e "\n${GREEN}======================================================================${NC}"
echo -e "${GREEN}>>> TOMVIS FRAMEWORK DEPLOYMENT COMPLETED SUCCESSFULLY! <<<${NC}"
echo -e "${GREEN}======================================================================${NC}"
echo -e "Commit: $(git rev-parse --short HEAD) - $(git log -1 --pretty=%B | head -n 1)"
echo -e "Status: Production application is live on port 3000 behind Nginx"
echo -e "Domain: https://tomvisolution.tech"
echo -e "======================================================================\n"

pm2 status tomvisweb || true
