# 🏫 My School — Next.js + MySQL Project

A responsive mini-project built using **Next.js** and **MySQL**, designed to manage school records efficiently.  
The application allows users to **add new schools** through a validated form and **view all schools** in a modern, card-based layout.

---

## 📋 Project Overview

This project was developed as part of a JavaScript framework assignment, using **Next.js** (with TypeScript) and **MySQL** as the database.

### 🎯 Objective
- Create a simple web app with **two functional pages**:
  1. A page to **add** and store school data in a MySQL table.
  2. A page to **fetch** and display all stored schools in a clean, responsive format.

> For better navigation and experience, the project includes **three pages**:  
> `Home`, `Add School`, and `Show Schools`.

---

## 🧱 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js (TypeScript)** | Frontend framework |
| **React Hook Form** | Form handling and validation |
| **MySQL** | Database for storing school data |
| **Vercel** | Hosting platform |
| **CSS / Responsive Design** | Mobile and desktop friendly layout |

---

## 🗂️ Project Structure

```bash
my-school/
│
├── app/
│   ├── add-school/           # Add School form page
│   ├── show-schools/         # Display schools (grid layout)
│   ├── page.tsx              # Home page
│   └── api/
│       └── schools/
│           └── route.ts      # GET & POST API endpoints (commented out for local setup)
│
├── components                # This has all the UI related Components used in the frontend
│   └── ui/
│
├── lib/
│   └── db.ts                 # MySQL database connection (or local DB setup)
│   └── utils.ts              # Tailwind CSS utility helper
├── models/
│   └── school.ts             # Sequelize model for 'schools' table
│
└── README.md
```

---

## 🧩 Features

- ✅ **Add School** – A responsive form built with `react-hook-form` for input and validation.
  - Validations include email format, required fields, and proper number input.
  - Images are stored in the `/public/schoolImages` folder.
  
- ✅ **Show Schools** – Displays all schools in a **card-style layout**, similar to product listings on e-commerce sites.
  - Shows **name**, **address**, **city**, and **image**.
  - Responsive for both mobile and desktop devices.

- ✅ **API Endpoints** (commented in code for reference)
  - `POST /api/schools` → Add new school to database
  - `GET /api/schools` → Fetch all schools

---

## ⚙️ MySQL Table Schema

**Table Name:** `schools`

| Column | Type | Description |
|---------|------|-------------|
| id | INT (AUTO_INCREMENT) | Primary Key |
| name | TEXT | School name |
| address | TEXT | School address |
| city | TEXT | City name |
| state | TEXT | State name |
| contact | VARCHAR(15) | Contact number |
| image | TEXT | Image path |
| email_id | TEXT | Email address |

---

## 🚀 Deployment

- Hosted on **Vercel**  
  🔗 [https://my-school-lake.vercel.app/](https://my-school-lake.vercel.app)

> The deployed version uses a **local database setup** for demonstration.  
> Original MySQL-based GET and POST API routes remain in code (commented for hosting compatibility).

---

## 💡 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-school.git
   cd my-school
   
2. **Install dependencies**
  ```bash
    npm install
```

3. **Set up environment variables**
Create a .env.local file:

  ```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_db

```
4. **Run the development server**
   
```bash
npm run dev
```
The app will be available at:
http://localhost:3000

##📱 Responsiveness
Fully responsive layout compatible with:

   1. Desktop screens
   2. Mobile devices

## 👩‍💻 Author
**Masoom Singh**
📧 masoomsingh0801@gmail.com
💼 Built with a focus on clean design, modular structure, and practical usability.

##🏁 Conclusion

This project demonstrates:
1. Integration of Next.js with a relational database (MySQL).
2. Clean form validation and API handling.
3. Responsive UI and real-world structure suitable for small-scale web apps.
