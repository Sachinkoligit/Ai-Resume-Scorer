import express from "express";
import { getUserByEmail, register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",register);

router.post("/getUserByEmail",getUserByEmail);

export default router;