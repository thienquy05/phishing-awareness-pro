from flask import Blueprint, request, jsonify
from zoneinfo import ZoneInfo
from datetime import datetime
from app.email_sender import email_sender
import re
import html

main = Blueprint("main", __name__)

def is_valid_email(email):
    # Basic regex for email validation
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email) is not None

@main.route("/logs", methods=['POST'])
def track_log():

    # Get user info and validate
    user_email = request.form.get("user_email")
    if not user_email or not is_valid_email(user_email):
        return jsonify({"error": "Invalid or missing email address"}), 400

    check_box = request.form.get("check_box")
    if check_box == "1":
        user_ip = request.remote_addr
    else:
        user_ip = "Not Authorized"

    timestamp = datetime.now(ZoneInfo("America/New_York")).strftime("%Y/%m/%d %H:%M:%S")
        
    try:
        email_sender(user_email, user_ip, timestamp)
        # Sanitize HTML output to prevent XSS
        safe_email = html.escape(user_email)
        return f"Thanks {safe_email}! You will receive an email from me. Please check your inbox!"
    except Exception as e:
        return jsonify({"error": "Failed to send email"}), 500
