#!/usr/bin/env bash
# =============================================================
#  HectorRail — Full-Stack Setup Script
#  Angular 17 + Strapi 4 + PostgreSQL + NVM
# =============================================================
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
success() { echo -e "${GREEN}[OK]${NC} $1"; }
warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
error()   { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

echo ""
echo -e "${BLUE}╔══════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     HectorRail Setup Script          ║${NC}"
echo -e "${BLUE}╚══════════════════════════════════════╝${NC}"
echo ""

# ── 1. NVM ────────────────────────────────────────────────────
info "Checking NVM..."
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  warn "NVM not found. Installing NVM v0.39.7..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  success "NVM installed"
else
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  success "NVM already installed: $(nvm --version)"
fi

# ── 2. Node 18 ───────────────────────────────────────────────
info "Switching to Node 18 (LTS)..."
nvm install 18
nvm use 18
nvm alias default 18
success "Node $(node -v) active"

# ── 3. PostgreSQL check ───────────────────────────────────────
info "Checking PostgreSQL..."
if command -v psql &>/dev/null; then
  PG_VERSION=$(psql --version | awk '{print $3}')
  success "PostgreSQL $PG_VERSION found"
  
  info "Creating database and user..."
  psql -U postgres <<-SQL 2>/dev/null || warn "DB may already exist — continuing."
    CREATE USER hectorrail_user WITH PASSWORD 'hectorrail_pass';
    CREATE DATABASE hectorrail OWNER hectorrail_user;
    GRANT ALL PRIVILEGES ON DATABASE hectorrail TO hectorrail_user;
SQL
  success "Database ready"
else
  warn "psql not found. Trying Docker Compose fallback..."
  if command -v docker-compose &>/dev/null || command -v docker &>/dev/null; then
    info "Starting PostgreSQL via Docker Compose..."
    docker-compose up -d postgres
    info "Waiting for PostgreSQL to be ready..."
    sleep 8
    success "PostgreSQL running via Docker"
  else
    error "Neither psql nor Docker found. Install PostgreSQL or Docker first."
  fi
fi

# ── 4. Backend (Strapi) ───────────────────────────────────────
echo ""
info "Setting up Strapi backend..."
cd backend

if [ ! -f .env ]; then
  cp .env.example .env
  # Generate random secrets
  APP_KEYS=$(node -e "const c=require('crypto');console.log([1,2,3,4].map(()=>c.randomBytes(16).toString('base64')).join(','))")
  JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('base64'))")
  ADMIN_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('base64'))")
  TOKEN_SALT=$(node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")
  TRANSFER_SALT=$(node -e "console.log(require('crypto').randomBytes(16).toString('base64'))")

  # Replace placeholder values in .env
  sed -i.bak "s|toBeModified1,toBeModified2,toBeModified3,toBeModified4|$APP_KEYS|g" .env
  sed -i.bak "s|JWT_SECRET=tobemodified|JWT_SECRET=$JWT_SECRET|g" .env
  sed -i.bak "s|ADMIN_JWT_SECRET=tobemodified|ADMIN_JWT_SECRET=$ADMIN_SECRET|g" .env
  sed -i.bak "s|API_TOKEN_SALT=tobemodified|API_TOKEN_SALT=$TOKEN_SALT|g" .env
  sed -i.bak "s|TRANSFER_TOKEN_SALT=tobemodified|TRANSFER_TOKEN_SALT=$TRANSFER_SALT|g" .env
  rm -f .env.bak
  success ".env created with secure random secrets"
fi

info "Installing backend dependencies (this may take a minute)..."
npm install --legacy-peer-deps
success "Backend dependencies installed"

cd ..

# ── 5. Frontend (Angular) ─────────────────────────────────────
echo ""
info "Setting up Angular frontend..."
cd frontend

info "Installing Angular CLI globally..."
npm install -g @angular/cli@17 --quiet

info "Installing frontend dependencies..."
npm install --legacy-peer-deps
success "Frontend dependencies installed"

cd ..

# ── 6. Done ───────────────────────────────────────────────────
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅  HectorRail Setup Complete!             ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${YELLOW}Start the backend (Strapi):${NC}"
echo -e "    cd backend && nvm use 18 && npm run develop"
echo ""
echo -e "  ${YELLOW}Start the frontend (Angular):${NC}"
echo -e "    cd frontend && nvm use 18 && ng serve"
echo ""
echo -e "  ${YELLOW}URLs:${NC}"
echo -e "    App:         ${BLUE}http://localhost:4200${NC}"
echo -e "    Strapi API:  ${BLUE}http://localhost:1337/api${NC}"
echo -e "    Admin panel: ${BLUE}http://localhost:1337/admin${NC}"
echo ""
echo -e "  ${YELLOW}First run:${NC} Strapi will ask you to create an admin account."
echo -e "  Then go to Settings → Roles → Public and enable train/booking endpoints."
echo ""
