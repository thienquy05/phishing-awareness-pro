# Phishing Awareness Project

This project is a simple web application designed to help people learn about phishing attacks. It simulates what happens when you click on a suspicious link and then asks for your email address. After you submit the form, the app sends you an email to remind you to be careful with phishing links.

## Features

* **User-Friendly Interface**: A simple and clean user interface built with React and Vite.
* **Flask Backend**: A backend API built with Flask to handle form submissions and send emails.
* **SQLite Database**: A lightweight database to store information about user clicks.
* **Email Reminders**: Automatically sends an email to users after they submit their information.

## How It's Organized

The project is split into two main parts:

* `frontend`: The React and Vite application that users interact with.
* `backend`: The Flask application that powers the frontend.

## Getting Started

### What You'll Need

* Python 3.8 or newer
* Node.js 14.x or newer
* `pip` and `npm`

### How to Install

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/thienquy05/phishing-awareness-pro.git](https://github.com/thienquy05/phishing-awareness-pro.git)
    cd phishing-awareness-pro
    ```

2.  **Set up the backend:**

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

    Create a `.env` file in the `backend` directory and add the following:

    ```
    EMAIL="your_email@gmail.com"
    PASSWORD="your_email_password"
    SECRET_KEY="your_secret_key"
    DB_FILE="/data/clicks.db"
    ```

3.  **Set up the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

### How to Run the App

1.  **Start the backend:**

    ```bash
    cd backend
    python main.py
    ```

    The backend will be running at `http://localhost:5000`.

2.  **Start the frontend:**

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend will be running at `http://localhost:5173`.

## How to Use It

1.  Open your browser and go to `http://localhost:5173`.
2.  You'll see a form asking for your email and your consent to track your IP address.
3.  Fill out the form and click "Verify Now."
4.  You'll get an email reminding you to be cautious about phishing links.
5.  You can see the data that's been collected by going to `http://localhost:5000/admin/view` (but remember to protect this route in a real-world application!).

## Want to Contribute?

I'd love your help! If you find any bugs or have ideas for how to make this project better, feel free to open an issue or create a pull request.