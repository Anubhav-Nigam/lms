import db from "../config/db.js";

// ⬅ Student: enroll in course
export const enrollCourse = (req, res) => {
  const studentId = req.user.id;
  const courseId = req.params.courseId;

  const check = `SELECT * FROM enrollments WHERE course_id = ? AND student_id = ?`;

  db.query(check, [courseId, studentId], (err, rows) => {
    if (err) return res.status(500).json(err);

    if (rows.length > 0)
      return res.status(400).json({ message: "Already enrolled" });

    const q = `INSERT INTO enrollments(course_id, student_id) VALUES (?, ?)`;

    db.query(q, [courseId, studentId], (err2) => {
      if (err2) return res.status(500).json(err2);
      res.json({ message: "Enrolled successfully" });
    });
  });
};

// ⬅ Student: view my enrollments
export const getMyEnrollments = (req, res) => {
  const studentId = req.user.id;

  const q = `
    SELECT c.* 
    FROM enrollments e 
    INNER JOIN courses c ON e.course_id = c.id 
    WHERE e.student_id = ?
  `;

  db.query(q, [studentId], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};
