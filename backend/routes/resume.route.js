import express from "express";
import { storeResume } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/resume",storeResume);

export default router;