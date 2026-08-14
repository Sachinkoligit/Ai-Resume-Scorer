import express from "express";
import { storeResume } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/addResume",storeResume);

export default router;