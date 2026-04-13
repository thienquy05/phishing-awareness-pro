from flask import Blueprint, request
from zoneinfo import ZoneInfo
from datetime import datetime
from app.email_sender import email_sender

main = Blueprint("main", __name__)

@main.route("/logs", methods=['POST'])
def track_log():

    # Get user info
    check_box = request.form.get("check_box")
    if check_box == "1":
        user_ip = request.remote_addr
    else:
        user_ip = "Not Authorized"

    timestamp = datetime.now(ZoneInfo("America/New_York")).strftime("%Y/%m/%d %H:%M:%S")
    user_email = request.form.get("user_email")
        
    email_sender(user_email, user_ip, timestamp)
    return f"Thanks {user_email}! You will receive an email from me. Please check your inbox!"
