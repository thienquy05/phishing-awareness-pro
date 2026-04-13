# 🚨 Phishing Awareness Pro

This project is an interactive web application designed to educate users about the dangers of phishing attacks. It simulates a scenario where a user clicks on a suspicious link and demonstrates what kind of information can be exposed (like IP addresses and timestamps).

After interacting with the simulation, the application sends an automated educational email, reminding the user to remain cautious and explaining the potential consequences of real-world phishing attacks.

## ✨ Features

* **Educational Simulation**: Demonstrates how easily data is collected when clicking unfamiliar links in a safe, transparent way.
* **Modern Interface**: A clean, responsive user interface built with React, Next.js, and Tailwind CSS.
* **Automated Email Reminders**: Uses a Python Flask backend to instantly send a professional, HTML-formatted security alert to the user's inbox outlining the captured data.
* **Stateless & Privacy-Focused**: Designed without a persistent database (no SQLite or Postgres). No sensitive user data or logs are stored after the session ends—everything runs statelessly, prioritizing user privacy and making it perfectly compatible with serverless ecosystems (like Vercel).

## 🏗️ Architecture

The project is split into perfectly decoupled frontend and backend components:

* **`frontend/`**: The client-side application built with **Next.js** (TypeScript) and styled with Tailwind CSS. It handles the user interface and form management.
* **`backend/`**: The API layer built with **Python & Flask**. It processes the request, securely grabs the environmental data (IP context and exact timestamp), and formats/dispatches the warning email using Python's built-in `smtplib` and `email.mime` modules.

## 🎯 Purpose

This tool was built to help people learn about cybersecurity practically. In real-world scenarios, malicious actors can do much more than what this awareness simulation demonstrates.

*Always verify the sender, avoid downloading unknown attachments, and think twice before clicking suspicious links.*
    
**🛡️ Stay alert. Stay informed. Stay safe.**

## 🤝 Want to Contribute?

I'd love your help! If you find any bugs or have ideas for how to make this project better, feel free to open an issue or create a pull request.