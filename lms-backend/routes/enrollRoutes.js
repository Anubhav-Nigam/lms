import express from "express";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";
import { enrollCourse, getMyEnrollments } from "../controllers/enrollController.js";

const router = express.Router();

router.post("/:courseId", auth, allowRoles("student"), enrollCourse);
router.get("/my", auth, allowRoles("student"), getMyEnrollments);

export default router;
