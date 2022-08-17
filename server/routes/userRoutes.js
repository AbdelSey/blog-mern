import express from "express";
import {
  getAllUsers,
  registerUser,
  loginUser,
} from "../controllers/userController";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
