React Blog Website
This project is a simple blog website built with React and JSON server. It allows users to get, post, and delete blog posts.

Features
View all blog posts
Add new blog posts
Delete existing blog posts
Tech Stack
Frontend: React
Backend: JSON Server
Getting Started
Prerequisites
Make sure you have the following installed:

Node.js
npm (Node package manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/react-blog-website.git
cd react-blog-website
Install dependencies:

bash
Copy code
npm install

Start the JSON server:
JSON server is used to provide a simple REST API for the blog posts.

bash
Copy code
npx json-server --watch data/db.json --port 8000
Start the React development server:

bash
Copy code
npm start
Open your browser:

Navigate to http://localhost:3000 to see the application running.

Project Structure
src/ - Contains the React components and other source files.
data/ - Contains the db.json file used by JSON server to simulate a backend.
Available Scripts
In the project directory, you can run:

npm start - Runs the app in development mode.
npm build - Builds the app for production.
Usage
Viewing All Blog Posts
The homepage displays all the blog posts fetched from the JSON server.

Adding a New Blog Post
To add a new blog post:

Click on the "New Blog" link in the navigation bar.
Fill in the title and body of the blog post.
Click "Add Blog".
Deleting a Blog Post
To delete a blog post:

Click on the blog post you want to delete.
Click the "Delete" button.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.
