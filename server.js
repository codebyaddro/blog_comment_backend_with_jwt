import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/db.config.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});