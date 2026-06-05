# HectorRail

JAMstack web application built with:
- **Frontend**: Next.js 15 + React 19 + Tailwind CSS + Framer Motion
- **CMS**: Strapi 5 (Headless CMS)
- **Database**: PostgreSQL
- **Node Version Manager**: NVS

## Prerequisites

- NVS (Node Version Switcher)
- PostgreSQL
- Git

## Quick Start

### 1. Install Node via NVS
```powershell
nvs use 18
```

### 2. Start Backend (Strapi CMS)
```powershell
cd backend
npm install
npm run develop
```
Strapi Admin: http://localhost:1337/admin

### 3. Start Frontend (Next.js)
```powershell
cd frontend
npm install
npm run dev
```
App: http://localhost:3000

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React 19, Tailwind CSS, Framer Motion |
| CMS / API | Strapi 5.30 |
| Database | PostgreSQL |
| Runtime | Node.js 18 (via NVS) |

## Architecture (JAMstack)

```
PostgreSQL → Strapi REST API → Next.js ISR → Static HTML → Browser
```

## Features
- Cinematic hero section with train imagery
- Services: System Transport, Timber, Wagon Load, Intermodal
- Live blog/news articles from Strapi CMS
- Contact form
- Sustainability section
- Careers section
- Fully responsive + animated (Framer Motion)
