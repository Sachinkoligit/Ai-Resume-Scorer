import resumeModal from "../models/resume.js";
import { PDFParse } from "pdf-parse";
import { Cohere } from "cohere-ai";
import upload from "../config/multer.js";
import fs from "fs";

export const storeResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;
    const pdfBuffer = fs.readFileSync(req.file.path);
    const parser = new PDFParse({ data: pdfBuffer });
    const result = await parser.getText();
    console.log(result);

    const prompt = `
    You are a resume screening assistant. Compare the following resume text with the provided job description and give a match score (0-100) and feedback.

    Resume: ${result.text}
    Job Description: ${job_desc}
    `;

    res.status(200).json({
      message: "Success",
      data: [{ job_desc: job_desc }, { user: user }, { resume: req.file }],
    });
  } catch (error) {
    console.log("error", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
