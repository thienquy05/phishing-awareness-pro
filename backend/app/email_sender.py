import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

def email_sender(to_user, ip, timestamp):
    sender_email = os.getenv("EMAIL")
    sender_pw = os.getenv("PASSWORD")

    if sender_email is None or sender_pw is None:
        raise ValueError("EMAIL and PASSWORD environment variables must be set")

    subject = "You've clicked on suspicious link - AWARENESS REMINDER"
    body = f"""
    <html>
        <body>
            <h3>Hello, </h3>
            <p>Thanks for your participation in my awareness test. </p>
            <p><strong>Details we logged: </strong></p>
            <ul>
                <li><b>Your IP:</b> {ip} </li>
                <li><b>Your timestamp:</b> {timestamp} </li>
            </ul>
            <br>
            <p><strong>⚠️ This is a reminder to stay cautious when clicking links in emails or unfamiliar websites.</strong></p>
            <p>In real-world scenarios, malicious actors can do much more than what this awareness simulation demonstrates.</p>
            <p>Always verify the sender, avoid downloading unknown attachments, and think twice before clicking suspicious links.</p>
            <p><strong>🛡️ Stay alert. Stay informed. Stay safe.</strong></p>

            <br>
            <p><strong>Thien Quy Pham - Computer Science Student</strong><p>
        </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = to_user

    msg.attach(MIMEText(body, "html"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_pw)
            server.sendmail(sender_email, to_user, msg.as_string())
        print(f"Email was sent to {to_user}")
    
    except Exception as e:
        print("Email failed:" , e)