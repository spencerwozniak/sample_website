@echo off
setlocal

REM Check if commit message argument is provided
if "%~1"=="" (
    echo "Commit message is required."
    exit /b 1
)

REM Stash local changes
git stash

REM Pull latest changes from remote repository
git pull origin main

REM Apply stashed changes
git stash pop

REM Add all modified files to the staging area
git add .

REM Commit the changes with the provided commit message
git commit -m "%~1"

REM Push the changes to the remote repository
git push origin main

endlocal