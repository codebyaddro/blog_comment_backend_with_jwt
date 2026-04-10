import { Schema, model } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
            default: "https://placehold.co/600x400",
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Blog = model("Blog", blogSchema);

export default Blog;