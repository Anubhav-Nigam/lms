import db from "../config/db.js";

// Instructor: Create course
export const createCourse = (req, res) => {
  const { title, description } = req.body;
  const instructorId = req.user.id; // from token

  if (!title || !description) {
    return res.status(400).json({ message: "All fields required" });
  }

  const q = `INSERT INTO courses(title, description, instructor_id) VALUES (?, ?, ?)`;

  db.query(q, [title, description, instructorId], (err) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    res.json({ message: "Course created successfully" });
  });
};

// Instructor: View my courses
export const getMyCourses = (req, res) => {
  const instructorId = req.user.id;

  const q = `SELECT * FROM courses WHERE instructor_id = ?`;

  db.query(q, [instructorId], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// Student + Public: Get all courses
export const getCourses = (req, res) => {
  const q = "SELECT * FROM courses";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};
