const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }
    const post = new Post({
      title,
      content,
      category,
      author: req.user.userId,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Get all posts (optionally filter by author or category)
exports.getPosts = async (req, res, next) => {
  try {
    const { author, category } = req.query;
    const filter = {};
    if (author) filter.author = author;
    if (category) filter.category = category;
    const posts = await Post.find(filter).populate('author', 'username email').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// Get a single post by ID
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username email');
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Update a post (author only)
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'You can only update your own posts.' });
    }
    const { title, content, category } = req.body;
    if (title) post.title = title;
    if (content) post.content = content;
    if (category) post.category = category;
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Delete a post (author only)
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found.' });
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'You can only delete your own posts.' });
    }
    await post.deleteOne();
    res.json({ message: 'Post deleted.' });
  } catch (err) {
    next(err);
  }
}; 