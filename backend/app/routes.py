from flask import Blueprint, request, render_template
from zoneinfo import ZoneInfo
import sqlite3
from datetime import datetime
from app.email_sender import email_sender
import os

main = Blueprint("main", __name__)

DB_FILE = os.getenv("DB_FILE", "assets/data/clicks.db")

# Create table if does not exist
def init_db():
    with sqlite3.connect(DB_FILE) as connection:
        cursor = connection.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS clicks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                ip TEXT,
                timestamp TEXT,
                user_email TEXT
            )               
        ''')
        connection.commit()
    
@main.route("/")
def home():
    return render_template("user_interface.html")

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

    # Insert to database
    with sqlite3.connect(DB_FILE) as conn:
        c = conn.cursor()
        c.execute('''
                INSERT INTO clicks (ip, timestamp, user_email) VALUES(?, ?, ?)      
            ''', (user_ip, timestamp, user_email))
        
        conn.commit()
        
    email_sender(user_email, user_ip, timestamp)
    return f"Thanks {user_email}! You will receive an email from me. Please check your inbox!"

@main.route("/admin/view")
def view_clicks():
    with sqlite3.connect(DB_FILE) as conn:
        c = conn.cursor()
        c.execute("SELECT * FROM clicks")
        rows = c.fetchall()
    return "<br>".join(str(row) for row in rows)
