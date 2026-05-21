# 🏥 DocAppoint — Doctor Appointment Manager

🌐 Live Site: https://doctor-appointment-client-one.vercel.app
📦 Client Repo: https://github.com/kawserali-64/doctor-appointment-client 
🛠️ Server Repo: https://github.com/kawserali-64/doctor-appointment-server

---

## 📌 About The Project

**DocAppoint** is a modern Doctor Appointment Booking System where users can browse doctors, view detailed profiles, and book appointments seamlessly. The system includes secure authentication, protected routes, and a fully responsive UI built with a clean healthcare-focused design.

---

## ✨ Key Features

- 👨‍⚕️ Browse top-rated doctors dynamically
- 🔍 Search doctors by name
- 📄 View detailed doctor profile page
- 📅 Book appointments with a simple form/modal
- 🧾 Manage personal bookings (Update / Delete)
- 👤 User profile management system
- 🔐 Secure authentication using JWT/session (Better Auth)
- 🌙 Fully responsive modern UI (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js App Router
- 🔄 Real-time UI update without reload

---

## 🧑‍⚕️ User Features

- Google/GitHub login support
- Book appointment with doctor
- View “My Bookings” dashboard
- Update or delete bookings instantly
- Edit profile information (name, photo)

---

## 🏗️ Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 🔐 Authentication System

- Login / Register system
- Google or GitHub social login
- JWT-based protected routes
- Persistent session handling
- Auto redirect after login

---

## 📅 Appointment System

### Booking Data Format
```json
{
  "userEmail": "user@gmail.com",
  "doctorName": "Dr. Ayesha Rahman",
  "patientName": "Rahim Uddin",
  "gender": "Male",
  "phone": "01712345678",
  "appointmentDate": "2026-05-12",
  "appointmentTime": "10:30 AM"
}