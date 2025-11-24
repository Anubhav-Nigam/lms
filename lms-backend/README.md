# Database Setup

CREATE DATABASE lms;
USE lms;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin','instructor','student'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses Table
CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  instructor_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lessons Table
CREATE TABLE lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT,
  title VARCHAR(255),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrollments Table
CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT,
  student_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





## Project Structure:
lms-backend/
│── node_modules/
│── package.json
│── server.js
│── config/
│     └── db.js
│── middleware/
│     └── auth.js
│── routes/
│     ├── authRoutes.js
│     └── courseRoutes.js
│── controllers/
│     ├── authController.js
│     └── courseController.js
│── .env



use env in .env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=lms
JWT_SECRET=supersecretkey123




All roles:

👨‍💼 Admin

GET /api/admin/users

👨‍🏫 Instructor

POST /api/courses/create

GET /api/courses/my

👨‍🎓 Student

GET /api/courses

POST /api/enroll/:courseId

GET /api/enroll/my