import os
import sys
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app and configure it
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')

# Initialize extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)

@app.route('/submit', methods=['POST'])
def submit():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Print the received data to the terminal
        print("Received form data:")
        for key, value in data.items():
            print(f"{key}: {value}")

        # Respond with a success message
        return jsonify({"message": "Form data received successfully"}), 200

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"message": "Failed to process the form data"}), 500

if __name__ == '__main__':
    app.run(debug=True)
