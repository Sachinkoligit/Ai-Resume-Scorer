import express from "express";
import dotenv from "dotenv";
import dns from "dns";
import { Connection } from "./connection.js";

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

const PORT = process.env.PORT || 5000;

Connection();

app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});