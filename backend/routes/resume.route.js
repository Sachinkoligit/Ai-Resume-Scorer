import express from "express";
import { getAllResume, getAllResumeForUser, storeResume } from "../controllers/resume.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/addResume",upload.single("resume"),storeResume);

router.get("/getUserResume/:user", getAllResumeForUser);

router.get("/getAllResume",getAllResume);

export default router;