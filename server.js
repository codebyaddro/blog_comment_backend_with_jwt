import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/db.config.js";
import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";
import commentRouter from "./routes/comment.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter);

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});