import resumeModal from "../models/resume.js";
import { PDFParse } from "pdf-parse";
import { CohereClient } from "cohere-ai";
import OpenAI from "openai";
import upload from "../config/multer.js";
import fs from "fs";

// const cohere = new CohereClient({
//   token: process.env.CO_API_KEY,
// });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
    `;

    // const aiResponse = await cohere.chat({
    //   model: "command-a-03-2025",
    //   message: prompt,
    //   max_tokens: 100,
    //   temperature: 0.7,
    // });

    const aiResponse = await openai.responses.create({
      model: "gpt-5.6-luna",
      input: prompt,
    });

    // let aiResult = aiResponse.text;
    // console.log(aiResult);

    let aiResult = aiResponse.output_text;
    console.log(aiResult);

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
