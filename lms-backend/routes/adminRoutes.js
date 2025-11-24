import express from "express";
import { auth } from "../middleware/auth.js";
import { allowRoles } from "../middleware/role.js";
import { getAllUsers } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", auth, allowRoles("admin"), getAllUsers);

export default router;
