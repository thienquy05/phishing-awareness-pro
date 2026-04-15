import sys
import os
sys.path.append(os.path.dirname(__file__))

from flask import Flask, jsonify
from app.routes import main
from dotenv import load_dotenv
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import os

# Load environment variables from .env file
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY") # secure session support

# Add rate limiting (max 5 requests per minute, 20 per day per IP)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["20 per day", "5 per minute"],
    storage_uri="memory://"
)

@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({"error": f"Rate limit exceeded: {e.description}"}), 429

# Allow a specific origin from env, or fallback to a restrictive local/dev origin if unset or empty
allowed_origins = os.getenv("ALLOWED_ORIGIN", "").strip() or "http://localhost:3000"
CORS(app, resources={r"/*": {"origins": allowed_origins}})

# Register blueprint
app.register_blueprint(main, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True)