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

## Technologies
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd blog-management-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory (see example below).
4. Start the server:
   ```bash
   npm start
   ```

### Example .env file
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blogdb
JWT_SECRET=your_jwt_secret
```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Posts
- `GET /api/posts` — List all posts (optionally filter by author/category)
- `POST /api/posts` — Create a new post (auth required)
- `GET /api/posts/:id` — Get a single post
- `PUT /api/posts/:id` — Update a post (author only)
- `DELETE /api/posts/:id` — Delete a post (author only)

### Comments
- `POST /api/posts/:postId/comments` — Add a comment (auth required)
- `GET /api/posts/:postId/comments` — List comments for a post

## Testing
Use the provided Postman collection (`postman_collection.json`) to test the API endpoints.

## Deployment
- The app uses the `PORT` environment variable.
- Add a `start` script in `package.json` for deployment platforms.

---

**Happy blogging!** 