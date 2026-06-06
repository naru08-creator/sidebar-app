@echo off
setlocal

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found.
  echo Please install Node.js first:
  echo https://nodejs.org/
  pause
  exit /b 1
)

if not exist node_modules (
  echo node_modules was not found.
  echo Running npm install first...
  npm install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)

set ELECTRON_SKIP_BINARY_DOWNLOAD=1
npm start
