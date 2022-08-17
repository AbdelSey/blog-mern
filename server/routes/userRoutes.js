import express from "express";
import { getAllUsers, registerUser } from "../controllers/userController";
const router = express.Router();
// get user
//

router.get("/", getAllUsers);
router.post("/signup", registerUser);
router.post("/login",)

export default router;
