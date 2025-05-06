#!/bin/bash

# Build frontend
cd frontend
npm run build

# Create public directory in backend if it doesn't exist
cd ../backend
mkdir -p public

# Copy frontend build to backend public directory
cp -r ../frontend/build/* public/

# Build backend
npm run build 