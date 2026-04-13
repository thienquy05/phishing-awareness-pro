import sys
import os
sys.path.append(os.path.dirname(__file__))

from flask import Flask
from app.routes import main
from dotenv import load_dotenv
from flask_cors import CORS
import os

# Load environment variables from .env file
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY") # secure session support

# Allow specific origins from env, or fallback to wildcard for dev
allowed_origins = os.getenv("ALLOWED_ORIGIN", "*")
CORS(app, resources={r"/*": {"origins": allowed_origins}})

# Register blueprint
app.register_blueprint(main, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True)