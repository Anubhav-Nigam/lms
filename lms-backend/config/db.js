import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

// connection test
db.getConnection((err) => {
  if (err) console.log("DB Error:", err);
  else console.log("MySQL connected");
});

export default db;
