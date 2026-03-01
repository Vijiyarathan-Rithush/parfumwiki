@echo off
setlocal enabledelayedexpansion

REM Output file
set OUTPUT=all_code_output.txt

REM Clear previous output
echo ===== Combined File Export ===== > "%OUTPUT%"
echo Generated on %date% %time% >> "%OUTPUT%"
echo. >> "%OUTPUT%"

REM Loop through files recursively
for /r %%F in (*.ts *.tsx *.css) do (
    echo ---------------------------------------- >> "%OUTPUT%"
    echo FILE: %%F >> "%OUTPUT%"
    echo ---------------------------------------- >> "%OUTPUT%"
    type "%%F" >> "%OUTPUT%"
    echo. >> "%OUTPUT%"
    echo. >> "%OUTPUT%"
)

echo Done! Output saved to %OUTPUT%
pause