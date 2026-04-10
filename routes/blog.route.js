import express from 'express';
import { createBlog, getBlogs } from './../controllers/blog.controller.js';

const router = express.Router();

router.get('/blogs', getBlogs);
router.post('/blogs', createBlog);