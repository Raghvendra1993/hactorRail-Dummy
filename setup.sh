#!/usr/bin/env bash
# =============================================================
#  HectorRail — Full-Stack Setup Script
#  Next.js 15 + Strapi 5 + PostgreSQL + NVS
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

# ── 1. Node via NVS ──────────────────────────────────────────
info "Checking NVS..."
if command -v nvs &>/dev/null; then
  nvs use 18
  success "Node $(node -v) active via NVS"
else
  warn "NVS not found. Install NVS from https://github.com/jasongin/nvs"
  error "Please install NVS and Node 18 first."
fi

# ── 2. PostgreSQL check ───────────────────────────────────────
info "Checking PostgreSQL..."
if command -v psql &>/dev/null; then
  PG_VERSION=$(psql --version | awk '{print $3}')
  success "PostgreSQL $PG_VERSION found"

  info "Creating database and user..."
  psql -U postgres <<-SQL 2>/dev/null || warn "DB may already exist — continuing."
    CREATE USER strapi WITH PASSWORD 'strapi_password';
    CREATE DATABASE strapi OWNER strapi;
    GRANT ALL PRIVILEGES ON DATABASE strapi TO strapi;
SQL
  success "Database ready"
else
  warn "psql not found. Make sure PostgreSQL is installed and running."
fi

# ── 3. Backend (Strapi) ───────────────────────────────────────
echo ""
info "Setting up Strapi backend..."
cd backend

info "Installing backend dependencies..."
npm install
success "Backend dependencies installed"

cd ..

# ── 4. Frontend (Next.js) ────────────────────────────────────
echo ""
info "Setting up Next.js frontend..."
cd frontend

info "Installing frontend dependencies..."
npm install
success "Frontend dependencies installed"

cd ..

# ── 5. Done ───────────────────────────────────────────────────
echo ""
echo -e "${GREEN}╔══════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ✅  HectorRail Setup Complete!             ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════╝${NC}"
echo ""
echo -e "  ${YELLOW}Start the backend (Strapi):${NC}"
echo -e "    cd backend && nvs use 18 && npm run develop"
echo ""
echo -e "  ${YELLOW}Start the frontend (Next.js):${NC}"
echo -e "    cd frontend && nvs use 18 && npm run dev"
echo ""
echo -e "  ${YELLOW}URLs:${NC}"
echo -e "    App:          ${BLUE}http://localhost:3000${NC}"
echo -e "    Strapi API:   ${BLUE}http://localhost:1337/api${NC}"
echo -e "    Admin panel:  ${BLUE}http://localhost:1337/admin${NC}"
echo ""
echo -e "  ${YELLOW}First run:${NC} Strapi will ask you to create an admin account."
echo -e "  Then go to Settings → Roles → Public and enable find/findOne"
echo -e "  for Article, Author, and Category content types."
echo ""
