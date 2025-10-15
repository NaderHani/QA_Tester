@echo off
echo ========================================
echo   Portfolio Deployment Script
echo ========================================
echo.

echo [1/2] Building the project...
call npm.cmd run build

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo [2/2] Build completed successfully!
echo.
echo ========================================
echo   Deployment Ready!
echo ========================================
echo.
echo Your portfolio is ready to deploy!
echo.
echo Quick Deploy Options:
echo.
echo 1. Vercel (Recommended):
echo    - Go to: https://vercel.com
echo    - Click: Add New Project
echo    - Import your GitHub repository
echo    - Click: Deploy
echo.
echo 2. Using Vercel CLI:
echo    npx vercel
echo.
echo 3. Manual Upload:
echo    - Upload the 'dist' folder to any hosting service
echo.
echo ========================================
echo Files ready in: dist folder
echo ========================================
echo.

pause

