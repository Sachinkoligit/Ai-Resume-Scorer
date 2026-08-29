import resumeModal from "../models/resume.js";
import { PDFParse } from "pdf-parse";
// import { CohereClient } from "cohere-ai";
// import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";
import upload from "../config/multer.js";
import fs from "fs";

// const cohere = new CohereClient({
//   token: process.env.CO_API_KEY,
// });

// const openai = new OpenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const storeResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;
    const pdfBuffer = fs.readFileSync(req.file.path);
    const parser = new PDFParse({ data: pdfBuffer });
    const result = await parser.getText();

    const prompt = `
    You are a resume screening assistant. Compare the following resume text with the provided job description and give a match score (0-100) and feedback.

    Resume: ${result.text}
    Job Description: ${job_desc}

    Return ONLY valid JSON in this exact format:

{
  "score": 85,
  "reason": "Brief explanation of why this score was given"
}

The score must be a number between 0 and 100.
    `;

    // const aiResponse = await cohere.chat({
    //   model: "command-a-03-2025",
    //   message: prompt,
    //   max_tokens: 100,
    //   temperature: 0.7,
    // });

    // const aiResponse = await openai.responses.create({
    //   model: "gpt-5.6-luna",
    //   input: prompt,
    // });

    const aiResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // let aiResult = aiResponse.replace(/```json|```/g,"").trim();
    let aiResult = JSON.parse(
      aiResponse.text.replace(/```json|```/g, "").trim(),
    );
    // console.log(aiResult.score, aiResult.reason);

    // let aiResult = aiResponse.output_text;
    // console.log(aiResult);
    await resumeModal.create({
      user,
      resume_name: req.file.originalname,
      job_desc,
      score: aiResult.score,
      feedback: aiResult.reason,
    });
    fs.unlinkSync(req.file.path);
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

export const getAllResumeForUser = async (req, res) => {
  try {
    const { user } = req.params;
    const existingUserResume = await resumeModal.find({ user: user }).sort({
      createdAt: -1,
    });
    if (existingUserResume.length === 0)
      return res.status(404).json({ message: "No Resume Found" });

    res.status(200).json({ data: existingUserResume });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getAllResume = async (req, res) => {
  try {
    const existingUserResume = await resumeModal.find().sort({
      createdAt: -1,
    });
    if (existingUserResume.length === 0)
      return res.status(404).json({ message: "No Resume Found" });

    res.status(200).json({ data: existingUserResume });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};