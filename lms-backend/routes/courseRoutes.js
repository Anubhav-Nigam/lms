import express from "express";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";
import { createCourse, getMyCourses, getCourses } from "../controllers/courseController.js";

const router = express.Router();

// Instructor
router.post("/create", auth, allowRoles("instructor", "admin"), createCourse);
router.get("/my", auth, allowRoles("instructor", "admin"), getMyCourses);

// Student + Instructor + Admin
router.get("/", auth, getCourses);

export default router;
