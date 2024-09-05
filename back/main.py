import os  # Import the os module to interact with the operating system (e.g., access environment variables).
import sys  # Import sys module to access system-specific parameters and functions.
from dotenv import load_dotenv  # Import load_dotenv to load environment variables from a .env file.
from flask import Flask, request, jsonify  # Import Flask for building the web app, request for handling incoming requests, and jsonify for returning JSON responses.
from flask_cors import CORS  # Import CORS for handling Cross-Origin Resource Sharing.
from flask_sqlalchemy import SQLAlchemy  # Import SQLAlchemy for database management and ORM.
from flask_bcrypt import Bcrypt  # Import Bcrypt for hashing passwords.
from flask_login import LoginManager  # Import LoginManager for managing user sessions and login functionality.

# Load environment variables from a .env file
load_dotenv()  # This loads the contents of the .env file into environment variables, making them accessible via os.getenv.

# Initialize the Flask app
app = Flask(__name__)  # Create an instance of the Flask web application.
CORS(app, supports_credentials=True)  # Enable Cross-Origin Resource Sharing (CORS), allowing requests from different origins.
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')  # Set the Flask app's secret key from the environment variables (used for session management and security).
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')  # Set the database URI for SQLAlchemy from the environment variables.

# Initialize extensions
db = SQLAlchemy(app)  # Initialize SQLAlchemy with the app for database management.
bcrypt = Bcrypt(app)  # Initialize Bcrypt for password hashing.
login_manager = LoginManager(app)  # Initialize the LoginManager for handling user authentication and login sessions.

# Define a route for handling form submissions
@app.route('/submit', methods=['POST'])  # This defines a new POST route at '/submit' for receiving form data.
def submit():
    try:
        # Get JSON data from the incoming request
        data = request.get_json()  # This extracts the JSON data sent in the request body.
        
        # Print the received data to the terminal (useful for debugging)
        print("Received form data:")  # Log a message indicating that form data was received.
        for key, value in data.items():  # Iterate over the key-value pairs in the received JSON data.
            print(f"{key}: {value}")  # Print each key-value pair for debugging purposes.

        # Respond with a success message in JSON format
        return jsonify({"message": "Form data received successfully"}), 200  # Return a success message and HTTP 200 status code.

    except Exception as e:  # Handle any exceptions that occur during the process.
        print(f"Error: {str(e)}")  # Print the error message for debugging.
        return jsonify({"message": "Failed to process the form data"}), 500  # Return a failure message and HTTP 500 status code.

# Run the Flask app if the script is executed directly
if __name__ == '__main__':
    app.run(debug=True)  # Start the Flask web server with debugging enabled.
