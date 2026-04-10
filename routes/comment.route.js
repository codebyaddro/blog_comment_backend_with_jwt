import express from 'express';
import { createComment, getComments } from './../controllers/comment.controller.js';
import { authMiddleware } from './../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/:blogId', getComments);
router.post('/', authMiddleware, createComment);

export default router;