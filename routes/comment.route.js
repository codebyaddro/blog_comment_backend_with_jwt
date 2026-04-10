import express from 'express';
import { createComment, getComments } from './../controllers/comment.controller.js';

const router = express.Router();

router.get('/:blogId', getComments);
router.post('/', createComment);

export default router;