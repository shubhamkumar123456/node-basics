const express = require('express');
const { createPost, getAllPost, getUserAllPost, updatePost, deletePost } = require('../controllers/post');

const router = express.Router();

router.post('/create',createPost);
router.get('/',getAllPost);
router.get('/:id',getUserAllPost);
router.put('/update/:id',updatePost)
router.delete('/delete/:id',deletePost);


module.exports = router