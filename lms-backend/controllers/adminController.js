import db from "../config/db.js";

// ⬅ Admin: get all users
export const getAllUsers = (req, res) => {
  const q = "SELECT id, name, email, role, created_at FROM users";

  db.query(q, (err, users) => {
    if (err) return res.status(500).json(err);
    res.json(users);
  });
};
