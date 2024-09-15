# Blog Website Backend

This project is a backend implementation for a blog website that enables users to share their thoughts, interact with posts, and foster engagement through comments and likes. The backend provides essential functionality for creating, retrieving, interacting with, and managing blog posts.

## Features

### 1. **Create Posts**
   - Users can create new blog posts by submitting text content and optionally adding metadata like the title, tags, and categories.
   - Each post will have a timestamp and unique identifier for easy reference.
   - **API Endpoint**: `POST /posts/create`

### 2. **Fetch Posts**
   - Users can fetch a list of all blog posts or retrieve individual posts by their unique ID.
   - The posts are sorted by the creation date, allowing users to browse the most recent content easily.
   - Pagination is supported to improve performance and user experience.
   - **API Endpoints**:
     - `GET /posts` (Fetch all posts)
     - `GET /posts/:id` (Fetch post by ID)

### 3. **Comment on Posts**
   - Users can add comments to blog posts, allowing for discussions and feedback.
   - Each comment is tied to a specific post and has an author and timestamp.
   - Users can fetch the list of comments associated with a specific post.
   - **API Endpoints**:
     - `POST /posts/:id/comment` (Add comment)
     - `GET /posts/:id/comments` (Fetch comments for a post)

### 4. **Like and Unlike Posts**
   - Users can like or unlike posts to express their preferences.
   - Each post has a count of likes that updates dynamically.
   - **API Endpoints**:
     - `POST /posts/:id/like` (Like post)
     - `POST /posts/:id/unlike` (Unlike post)

## Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB (for storing blog posts, comments, and likes)
- **Authentication**: JWT-based authentication for secure access
- **API Testing**: Postman
