# Blog Management RESTful API

A beginner-friendly RESTful API for managing blog posts, users, and comments. Built with Node.js, Express.js, MongoDB, JWT authentication, and Mongoose.

## Features
- User registration and login (JWT-based authentication)
- CRUD operations for blog posts
- Only authenticated users can create posts
- Only post authors can update or delete their own posts
- View all blog posts, or filter by author or category
- Comment system for authenticated users
- Secure routes using JWT middleware
- Proper error handling and validation

## Project Structure

Blog management api/
├── controllers/
│   ├── authController.js
│   ├── commentController.js
│   └── postController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Comment.js
│   ├── Post.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── comments.js
│   └── posts.js
├── postman_collection.json
├── .env.example
├── package.json
├── README.md
└── server.js

### Prerequisites
- Node.js (v14+)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   git clone <repo-url>
   cd blog-management-api

2. Install dependencies:
   npm install

3. Create a `.env` file in the root directory (see example below).
4. Start the server:
   npm start

### Example .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your_jwt_secret

## Development Mode
For auto-reloading during development, use:
bash
npm run dev

This uses [nodemon](https://nodemon.io/) to restart the server on file changes.

## API Endpoints & Example Requests

### Auth
- **Register:** `POST /api/auth/register`
  - **Request:**
    json
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "password123"
    }
    
  - **Response:**
    json
    { "message": "User registered successfully." }
    
- **Login:** `POST /api/auth/login`
  - **Request:**
    json
    {
      "email": "test@example.com",
      "password": "password123"
    }

  - **Response:**
    json
    { "token": "<JWT_TOKEN>" }

### Posts
- **Create Post:** `POST /api/posts` (auth required)
  - **Request:**
    json
    {
      "title": "My First Post",
      "content": "This is the content.",
      "category": "General"
    }
    
  - **Response:**
    json
    {
      "_id": "...",
      "title": "My First Post",
      "content": "This is the content.",
      "category": "General",
      "author": "...",
      "createdAt": "...",
      "updatedAt": "..."
    }
    
- **Get All Posts:** `GET /api/posts`
- **Get Single Post:** `GET /api/posts/:id`
- **Update Post:** `PUT /api/posts/:id` (auth + author only)
- **Delete Post:** `DELETE /api/posts/:id` (auth + author only)

### Comments
- **Add Comment:** `POST /api/posts/:postId/comments` (auth required)
  - **Request:**
    json
    { "content": "Nice post!" }

- **Get Comments:** `GET /api/posts/:postId/comments`

## Troubleshooting
- **Error: Cannot find module 'dotenv'**
  - Run `npm install` to install dependencies.
- **MongoDB connection error: uri must be a string, got undefined**
  - Ensure your `.env` file exists and `MONGODB_URI` is set.
- **401 Unauthorized**
  - Make sure you set the `jwt_token` variable in Postman and the `Authorization` header is present.
- **400 Bad Request**
  - Check that all required fields are present in your request body.
- **500 Internal Server Error**
  - Check your server logs for details.
- **MongoDB not running**
  - Make sure your MongoDB service is started locally or your cloud URI is correct.

By Ahimbazwe Mpuhwe Divine Nikita
