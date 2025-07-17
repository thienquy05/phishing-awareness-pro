from flask import Flask
from app.routes import main, init_db
from dotenv import load_dotenv
from flask_cors import CORS
import os

# Load environment variables from .env file
load_dotenv('assets/.env')

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY") # secure session support
CORS(app, origins=["http://localhost:5173"])

# Register blueprint
app.register_blueprint(main)

if __name__ == "__main__":
    init_db()
    app.run(debug=True)