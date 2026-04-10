import express from 'express';
import { createBlog, getBlogs } from './../controllers/blog.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, createBlog);

export default router;