import express from 'express';
import { createComment, getComments } from './../controllers/comment.controller';

const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', createComment);