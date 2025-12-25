#!/bin/sh
set -e

echo "Waiting for database at $DATABASE_URL..."

DB_HOST=$(echo $DATABASE_URL | sed -E 's/.*@([^:]+):.*/\1/')
DB_PORT=$(echo $DATABASE_URL | sed -E 's/.*:([0-9]+)\/.*/\1/')

until nc -z $DB_HOST $DB_PORT; do
  echo "Database is not ready yet..."
  sleep 2
done

echo "Database is up!"

# Run migrations
cd /usr/src/app/packages/db
npx prisma migrate deploy

# Start Next.js app
cd /usr/src/app/apps/drawzy
pnpm run start
