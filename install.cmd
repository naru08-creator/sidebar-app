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

npm install
pause
