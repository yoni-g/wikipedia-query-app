#!/bin/bash

# Build frontend
echo "Building frontend..."
cd frontend
# echo "Cleaning frontend node_modules..."
# rm -rf node_modules package-lock.json
echo "Installing frontend dependencies..."
npm install --legacy-peer-deps
echo "Building frontend..."
npm run build
cd ..

# Ensure backend public directory exists and copy frontend build
echo "Setting up backend public directory..."
mkdir -p backend/public
cp -r frontend/build/* backend/public/

# Build backend
echo "Building backend..."
cd backend
# echo "Cleaning backend node_modules..."
# rm -rf node_modules package-lock.json
echo "Installing backend dependencies..."
npm install --legacy-peer-deps
echo "Building backend..."
npm run build
cd ..

echo "Build complete!"