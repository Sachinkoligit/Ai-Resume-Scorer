import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    role:{
        type: String,
        default:"user"
    },
    photourl:{
        type:String
    }
},
{timestamps:true});

const userModal = mongoose.model("user",userSchema);

export default userModal;