
import Comment from './../models/comment.model';
export const createComment = async (req, res) => {
    try {
        const { content, blogId } = req.body;
        const comment = await Comment.create({
            content,
            blog: blogId,
            author: req.user._id
        });
        res.status(201).json({
            success: true,
            message: "Comment created successfully",
            comment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create comment",
            error: error.message
        });
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ blog: req.params.blogId }).populate("author", "name");
        res.status(200).json({
            success: true,
            message: "Comments fetched successfully",
            comments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch comments",
            error: error.message
        });
    }
};