const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Add a comment to a post
exports.addComment = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Content is required.' });
    }
    // Check if post exists
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    const comment = new Comment({
      post: req.params.postId,
      author: req.user.userId,
      content,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
};

// Get all comments for a post
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('author', 'username email')
      .sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    next(err);
  }
}; 