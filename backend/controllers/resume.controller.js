import resumeModal from "../models/resume.js";
import { PDFParse } from "pdf-parse";
import { Cohere } from "cohere-ai";
import upload from "../config/multer.js";

export const storeResume = async(req,res) =>{
    try{
        const {job_desc, user} = req.body;
        console.log("job description",job_desc)
        res.status(200).json({message:"Success",data:[job_desc,user,req.file]})
    } catch(error){
        console.log("error",error)
        res.status(500).json({message:"Internal server error",error:error.message});
    }
}