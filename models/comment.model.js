import { Schema, model } from "mongoose";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        blog: {
            type: Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
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

const Comment = model("Comment", commentSchema);

export default Comment;