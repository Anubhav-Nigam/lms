import db from "../config/db.js";

export const getCourses = (req, res) => {
  const q = "SELECT * FROM courses";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
};

// export const addCourse = async (req, res) => {
//   const { title, description, instructor_id } = req.body;

//   await db.query(
//     "INSERT INTO courses (title, description, instructor_id) VALUES (?, ?, ?)",
//     [title, description, instructor_id]
//   );

//   res.json({ message: "Course added" });
// };
