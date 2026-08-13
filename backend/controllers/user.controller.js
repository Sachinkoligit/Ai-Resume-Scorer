import userModal from "../models/user.js";

export const register = async(req,res)=>{
    try{
        const {name, email, photoUrl} = req.body;
        
    } catch(err){
        console.log(err)
        res.status(500).json({error:"Server error",message: err.message});
    }
}