@echo off
echo ========================================
echo   AIToolsDaily - Publishing Update
echo ========================================
echo.

cd /d C:\Users\altst\aitoolsdaily

echo [1/4] Building site with Hugo...
hugo --minify
if %errorlevel% neq 0 (
    echo ERROR: Hugo build failed!
    pause
    exit /b 1
)
echo      Done!
echo.

echo [2/4] Staging changes...
git add .
echo      Done!
echo.

echo [3/4] Creating commit...
git commit -m "Content update %date% %time%"
if %errorlevel% neq 0 (
    echo      No changes to commit.
) else (
    echo      Done!
)
echo.

echo [4/4] Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Push failed! Check your internet connection.
    pause
    exit /b 1
)
echo      Done!
echo.

echo ========================================
echo   SUCCESS! Site will update in ~30 sec
echo   Visit: https://aitoolsdaily.org
echo ========================================
echo.

timeout /t 5
