import Blog from './../models/blog.model.js';
export const createBlog = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const blog = await Blog.create({
            title,
            description,
            image,
            author: req.user._id
        });
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create blog",
            error: error.message
        });
    }
};

export const getBlogs = async (_, res) => {
    try {
        const blogs = await Blog.find().populate("author", "name email");
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch blogs",
            error: error.message
        });
    }
};