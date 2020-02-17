@echo off
echo Begin program.
echo. 
cd %CD%
node app.js %userprofile%\desktop
timeout 5
exit