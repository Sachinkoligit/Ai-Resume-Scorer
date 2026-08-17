import express from "express";
import { storeResume } from "../controllers/resume.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/addResume",upload.single("resume"),storeResume);

export default router;