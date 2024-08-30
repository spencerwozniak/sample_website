@echo off
setlocal

echo Creating virtual environment...
py -m venv venv

echo Activating virtual environment...
.\venv\Scripts\activate

echo Installing dependencies...
pip install -r requirements.txt

echo Setup complete.

endlocal