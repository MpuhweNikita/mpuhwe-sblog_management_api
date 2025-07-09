const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

// Get all posts or filter
router.get('/', postController.getPosts);

// Get single post
router.get('/:id', postController.getPostById);

// Create post (auth required)
router.post('/', auth, postController.createPost);

// Update post (auth + author only)
router.put('/:id', auth, postController.updatePost);

// Delete post (auth + author only)
router.delete('/:id', auth, postController.deletePost);

module.exports = router; 