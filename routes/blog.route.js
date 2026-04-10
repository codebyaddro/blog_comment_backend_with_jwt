import express from 'express';
import { createBlog, getBlogs } from './../controllers/blog.controller.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', createBlog);

export default router;