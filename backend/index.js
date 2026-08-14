import express from "express";
import dotenv from "dotenv";
import dns from "dns";
import { Connection } from "./connection.js";
import authRoutes from "./routes/user.route.js"
import resumeRoutes from "./routes/resume.route.js"

dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

Connection();

app.use("/api/auth",authRoutes);
app.use("/api/auth",resumeRoutes);

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});