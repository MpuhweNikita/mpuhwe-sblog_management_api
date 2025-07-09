const express = require('express');
const router = express.Router({ mergeParams: true });
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Add comment to a post (auth required)
router.post('/:postId/comments', auth, commentController.addComment);

// Get comments for a post
router.get('/:postId/comments', commentController.getComments);

module.exports = router; 