# NOSTRA – Login & Signup Application

A modern and responsive login and signup application built using React and Node.js with Express.

## Project Overview

NOSTRA provides a simple authentication flow where users can create an account and log in using their registered email address and password.

After successful login, users are redirected to the NOSTRA E-Commerce website.

## Technologies Used

**Frontend**
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js

## Features

- Responsive login and signup pages
- Email and password validation
- Password confirmation during registration
- Backend authentication using Express
- Temporary user storage without a database
- Error messages for invalid login attempts
- Duplicate email registration prevention
- Redirect to NOSTRA E-Commerce website after successful login

## Project Structure

```text
NOSTRA-LOGIN/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 5. Start the backend

```bash
node server.js
```

The backend runs on port 5000.

## Test Login Credentials

Default test account:

- Email: user@nostra.com
- Password: 123456

New users can also register through the Signup page and log in using their registered credentials.

## Important Note

User accounts are stored temporarily in backend memory. Registered accounts are lost when the backend server restarts.

This project is intended for demonstration and learning purposes. It does not use a database or production-grade password security.

## NOSTRA E-Commerce Website

[Visit NOSTRA E-Commerce](https://ayishasheerin.github.io/Nostra-E-Commerce-Website/)

---

**Developed as a React and Express authentication project.**