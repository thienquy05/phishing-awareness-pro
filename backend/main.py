from flask import Flask
from app.routes import main, init_db
from dotenv import load_dotenv
from flask_cors import CORS
import os

# Load environment variables from .env file
load_dotenv('assets/.env')

def initialize_database():
    """Checks for the database file on startup and creates it if it's missing."""
    # Get the database file path from environment variables
    db_path = os.getenv("DB_FILE")

    if db_path and not os.path.exists(db_path):
        print(f"Database not found at {db_path}, creating it now...")
        
        # This ensures the directory (like /var/data/) exists before creating the file
        db_dir = os.path.dirname(db_path)
        if db_dir:
            os.makedirs(db_dir, exist_ok=True)
            
        # Call your existing function to create the tables
        init_db()
        print("Database created successfully.")
    else:
        print("Database already exists or DB_FILE variable is not set.")
        
app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY") # secure session support
CORS(app, resources={r"/*": {"origins": "https://phish-tracker-demo.netlify.app"}})

initialize_database()
# Register blueprint
app.register_blueprint(main)

if __name__ == "__main__":
    init_db()
    app.run(debug=True)