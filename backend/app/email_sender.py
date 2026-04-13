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

    subject = "🚨 Security Alert: You clicked a simulated phishing link"
    body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #f8d7da; border-left: 5px solid #dc3545; padding: 15px; margin-bottom: 20px;">
                <h2 style="color: #721c24; margin-top: 0;">Security Awareness Simulation</h2>
                <p style="margin-bottom: 0;">Hello,</p>
                <p>You recently clicked a link as part of a safe phishing awareness exercise. Thank you for participating!</p>
            </div>
            
            <p>If this had been a real phishing attack, your personal data could have been compromised. Here is the information we successfully logged from your click:</p>
            
            <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <ul style="list-style-type: none; padding-left: 0; margin: 0;">
                    <li style="margin-bottom: 10px;">🌐 <b>Your IP Address:</b> {ip}</li>
                    <li>🕒 <b>Timestamp:</b> {timestamp}</li>
                </ul>
            </div>
            
            <h3 style="color: #0056b3;">What you need to know:</h3>
            <p>In real-world scenarios, malicious actors use links like these to steal credentials, install malware, or compromise your network.</p>
            
            <ul>
                <li>Always verify the sender's actual email address.</li>
                <li>Hover over links to see the real destination before clicking.</li>
                <li>Avoid downloading unknown attachments.</li>
                <li>Think twice before acting on urgent or threatening requests.</li>
            </ul>
            
            <p style="font-size: 1.1em;"><strong>🛡️ Stay alert. Stay informed. Stay safe.</strong></p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #666; font-size: 0.9em;">
                <strong>Thien Quy Pham</strong><br>
                Computer Science Student<br>
                <em>Phishing Awareness Project</em>
            </p>
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