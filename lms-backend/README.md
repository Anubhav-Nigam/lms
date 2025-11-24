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




INSERT INTO users (name,email,password,role) VALUES
('Admin User','admin@test.com','$2a$10$ZRuJviGwyVP8jxghMhbMZ.8sTjzFgFZ4gPglv931aZcDToBJ8jpUu','admin'),
('Instructor User','ins@test.com','$2a$10$ZRuJviGwyVP8jxghMhbMZ.8sTjzFgFZ4gPglv931aZcDToBJ8jpUu','instructor'),
('Student User','student@test.com','$2a$10$ZRuJviGwyVP8jxghMhbMZ.8sTjzFgFZ4gPglv931aZcDToBJ8jpUu','student');




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




