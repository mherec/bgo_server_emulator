@echo off 
 
node app.js

IF %ERRORLEVEL% NEQ 0 (
    echo An error occurred while running app.js. Installing dependencies...
    npm install

    node app.js
    IF %ERRORLEVEL% NEQ 0 (
        echo The error still persists. Stopping now.
        pause
        exit /b 1
    )
)  
