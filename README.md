# Job Board Platform

## Overview

Job Board Platform is a full-stack web application developed using React.js, Django REST Framework, PostgreSQL, and JWT Authentication.

The platform enables users to browse available jobs, view job details, and apply for jobs. Administrators can securely manage job postings through an admin dashboard.

---

## Features

### User Features

- User Registration
- User Login
- Browse Jobs
- Search Jobs
- View Job Details
- Apply for Jobs
- Logout

### Admin Features

- Admin Login
- Add Jobs
- Edit Jobs
- Delete Jobs
- Manage Job Listings

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Django
- Django REST Framework

### Database
- PostgreSQL

### Authentication
- JWT Authentication---

## Project Structure

```
JobBoardPlatform/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── jobs/
│   ├── users/
│   ├── backend/
│   ├── manage.py
│   └── requirements.txt
│
├── screenshots/
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/hema-9059/JobBoardPlatform.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```
## Screenshots

###  Home Page
<img width="1896" height="787" alt="Screenshot 2026-07-01 080500" src="https://github.com/user-attachments/assets/45fb95f8-4e4a-4e2a-abd7-84772b4db420" />

###  Register Page
<img width="1878" height="802" alt="Screenshot 2026-07-01 080535" src="https://github.com/user-attachments/assets/9650d34f-0657-4972-83c7-acc10f03b245" />

###  Login page
<img width="1856" height="982" alt="Screenshot 2026-07-01 080358" src="https://github.com/user-attachments/assets/5320d688-36ad-4142-b6fb-0970a776e251" />

###  Job Listings
<img width="1902" height="810" alt="Screenshot 2026-07-01 080558" src="https://github.com/user-attachments/assets/aa286a44-cf5e-4295-854b-567c64f1b20d" />

###  Job Details
<img width="1900" height="863" alt="Screenshot 2026-07-01 080919" src="https://github.com/user-attachments/assets/7c996579-8d0d-4038-9376-d5636258d88e" />

###  Employer Dashboard
<img width="1882" height="962" alt="Screenshot 2026-07-01 080624" src="https://github.com/user-attachments/assets/60e69b2c-4793-492e-8bc5-3687e5355e8f" />

### Job Seeker Dashboard
<img width="1892" height="617" alt="Screenshot 2026-07-01 080644" src="https://github.com/user-attachments/assets/60849402-7554-46d7-bff9-8fe92abc974c" />

### My Applications
<img width="1768" height="870" alt="Screenshot 2026-07-01 101238" src="https://github.com/user-attachments/assets/54a2c255-4dd4-4541-99a7-7d9b9a03914d" />

## Future Improvements

- Resume Upload
- Search & Filter Jobs
- Email Notifications
- Employer Profile
- User Profile Editing
- Dark Mode
- Job Bookmark Feature

## 👨‍💻 Author
Raavi Hema
Engineering Student




