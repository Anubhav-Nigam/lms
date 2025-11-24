import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    if (results.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = results[0];

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role
      }
    });
  });
};

export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields required" });
  }

  // check existing user
  const checkUser = `SELECT * FROM users WHERE email = ?`;

  db.query(checkUser, [email], (err, results) => {
    if (err) return res.status(500).json({ message: "DB error" });

    if (results.length > 0)
      return res.status(400).json({ message: "Email already exists" });

    // hash password
    const hashed = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)`;

    db.query(sql, [name, email, hashed, role], (err2) => {
      if (err2) return res.status(500).json({ message: "Error inserting user" });

      return res.json({ message: "User registered successfully" });
    });
  });
};
