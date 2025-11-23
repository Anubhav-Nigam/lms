import express from "express";
import { auth } from "../middleware/auth.js";
import { getCourses } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", auth, getCourses);

export default router;
