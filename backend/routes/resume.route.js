import express from "express";
import { getAllResumeForUser, storeResume } from "../controllers/resume.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/addResume",upload.single("resume"),storeResume);

router.get("/getUserResume/:user", getAllResumeForUser);

export default router;