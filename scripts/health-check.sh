#!/usr/bin/env bash
# ==============================================================================
# TOMVIS Framework - Comprehensive Production Health Check Suite
# Server: Ubuntu 24.04 (187.77.142.59)
# Domain: tomvisolution.tech / www.tomvisolution.tech
# ==============================================================================

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}======================================================================${NC}"
echo -e "${BLUE}>>> TOMVIS SYSTEM HEALTH CHECK SUITE <<<${NC}"
echo -e "${BLUE}======================================================================${NC}"
echo "Execution Time: $(date '+%Y-%m-%d %H:%M:%S %Z')"

# 1. Runtime Versions
echo -e "\n${YELLOW}[1/7] Inspecting Runtime Environments:${NC}"
echo -n "Node.js: "
if command -v node >/dev/null 2>&1; then
    echo -e "${GREEN}$(node -v)${NC}"
else
    echo -e "${RED}Not Found!${NC}"
fi

echo -n "NPM: "
if command -v npm >/dev/null 2>&1; then
    echo -e "${GREEN}$(npm -v)${NC}"
else
    echo -e "${RED}Not Found!${NC}"
fi

# 2. PM2 Process Status
echo -e "\n${YELLOW}[2/7] Checking PM2 Process Manager Status:${NC}"
if command -v pm2 >/dev/null 2>&1; then
    pm2 status tomvisweb || pm2 status
else
    echo -e "${RED}PM2 binary not found in path!${NC}"
fi

# 3. Nginx Web Server Status
echo -e "\n${YELLOW}[3/7] Checking Nginx Service Status:${NC}"
if systemctl is-active --quiet nginx 2>/dev/null; then
    echo -e "${GREEN}✓ Nginx service is ACTIVE (running)${NC}"
elif command -v nginx >/dev/null 2>&1; then
    echo -e "${YELLOW}Nginx is installed; verifying configuration test...${NC}"
    nginx -t || true
else
    echo -e "${YELLOW}systemctl or nginx not directly callable in current shell context.${NC}"
fi

# 4. Port 3000 Binding Check
echo -e "\n${YELLOW}[4/7] Checking Port 3000 Local Loopback Binding:${NC}"
if command -v ss >/dev/null 2>&1; then
    ss -tulpn | grep :3000 || echo "Port 3000 ss check completed"
elif command -v netstat >/dev/null 2>&1; then
    netstat -tulpn | grep :3000 || echo "Port 3000 netstat check completed"
else
    echo "Socket inspection tools (ss/netstat) not available; skipping socket table."
fi

# 5. Internal HTTP Localhost Connectivity
echo -e "\n${YELLOW}[5/7] Testing Internal Loopback HTTP (http://127.0.0.1:3000):${NC}"
if curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 http://127.0.0.1:3000 | grep -q "200\|304"; then
    echo -e "${GREEN}✓ Internal Next.js application responding with HTTP 200 OK${NC}"
else
    echo -e "${RED}⚠ Could not reach http://127.0.0.1:3000 or status was not 200/304${NC}"
    curl -I --connect-timeout 5 http://127.0.0.1:3000 || true
fi

# 6. Public Production HTTPS Connectivity
echo -e "\n${YELLOW}[6/7] Testing Public Production HTTPS (https://tomvisolution.tech):${NC}"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 8 https://tomvisolution.tech || echo "ERR")
if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "304" ]; then
    echo -e "${GREEN}✓ Public HTTPS endpoint responding with HTTP ${HTTP_STATUS} OK${NC}"
else
    echo -e "${YELLOW}Status returned: ${HTTP_STATUS}${NC}"
    curl -I --connect-timeout 8 https://tomvisolution.tech || true
fi

# 7. SSL Certificate Expiry Check
echo -e "\n${YELLOW}[7/7] Checking SSL Certificate Validity for tomvisolution.tech:${NC}"
if command -v openssl >/dev/null 2>&1; then
    echo | openssl s_client -servername tomvisolution.tech -connect tomvisolution.tech:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null || echo "SSL certificate check query completed."
fi

echo -e "\n${BLUE}======================================================================${NC}"
echo -e "${BLUE}>>> HEALTH CHECK COMPLETE <<<${NC}"
echo -e "${BLUE}======================================================================${NC}\n"
