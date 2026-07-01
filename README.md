# Job Board Platform

A full-stack Job Board Platform built using React.js and Django REST Framework. The application allows administrators to manage job postings and users to browse and apply for jobs.

---

## Features

- User Registration
- User Login Authentication
- View All Jobs
- Search Jobs
- Filter Jobs
- Apply for Jobs
- Admin Dashboard
- Add Jobs
- Edit Jobs
- Delete Jobs
- View Applications
- Logout

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

---

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
## Screenshots

### Home Page
<img width="1896" height="787" alt="Screenshot 2026-07-01 080500" src="https://github.com/user-attachments/assets/44e3d652-07f3-4159-abd2-2e0b9568e32d" />
