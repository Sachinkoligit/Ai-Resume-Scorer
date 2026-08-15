import multer from "multer";
import resumeModal from "../models/resume.js";
import { PDFParse } from "pdf-parse";
import { Cohere } from "cohere-ai";

export const storeResume = async(req,res) =>{
    try{
        const {job_desc, user} = req.body;
        
    } catch(error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}