-- HectorRail Database Initialization
-- This runs automatically when the Docker container first starts

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy station name search

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE hectorrail TO hectorrail_user;
GRANT ALL ON SCHEMA public TO hectorrail_user;

-- Note: Strapi will create all tables via its migration system.
-- This file just sets up extensions and permissions.

\echo 'HectorRail database initialized successfully!'
