@echo off
setlocal

:: Turn off command echoing, so commands themselves are not shown in the terminal.
:: 'setlocal' creates a local environment, ensuring changes made to environment variables are temporary.

echo Creating virtual environment...
py -m venv venv
:: This command creates a virtual environment in the current directory using Python's 'venv' module.
:: 'py' is the Python launcher, and '-m venv venv' creates a folder named 'venv' containing the virtual environment.

echo Activating virtual environment...
.\venv\Scripts\activate
:: Activates the virtual environment so that any following commands (like installing packages) use the environment's Python interpreter.

echo Installing dependencies...
pip install -r requirements.txt
:: Installs all the dependencies listed in the 'requirements.txt' file using pip, Python's package manager.
:: The '-r' flag tells pip to install each package listed in 'requirements.txt'.

echo Setup complete.
:: Prints a message indicating that the setup process is complete.

endlocal
:: Ends the local environment started by 'setlocal', cleaning up any changes made to the environment variables.
