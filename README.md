# HectorRail Clone

Full-stack train booking application built with:
- **Frontend**: Angular 17
- **Backend**: Strapi v4
- **Database**: PostgreSQL
- **Node Version Manager**: NVM

## Prerequisites

- NVM (Node Version Manager)
- PostgreSQL 14+
- Git

## Quick Start

### 1. Install NVM & Node
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 18
nvm use 18
```

### 2. Setup PostgreSQL
```bash
# Create database
psql -U postgres -c "CREATE DATABASE hectorrail;"
psql -U postgres -c "CREATE USER hectorrail_user WITH PASSWORD 'hectorrail_pass';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE hectorrail TO hectorrail_user;"
```

### 3. Setup Backend (Strapi)
```bash
cd backend
cp .env.example .env
# Edit .env with your DB credentials
npm install
npm run develop
```
Strapi Admin: http://localhost:1337/admin

### 4. Setup Frontend (Angular)
```bash
cd frontend
nvm use 18
npm install -g @angular/cli@17
npm install
ng serve
```
App: http://localhost:4200

## Features
- Train search (origin, destination, date, passengers)
- Real-time train results with pricing
- Seat selection & booking flow
- User authentication
- Booking management
- Responsive mobile-first design
