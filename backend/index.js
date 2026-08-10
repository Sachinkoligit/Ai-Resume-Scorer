import express from "express";
import { configDotenv } from "dotenv";
import { Connection } from "./connection.js";

const app = express();
const PORT=5000;
configDotenv();

Connection();

app.get("/",(req,res)=>{
    res.send("Hello from Backend!");
})

app.listen(PORT, ()=>{
    console.log("Server is running on",PORT)
})