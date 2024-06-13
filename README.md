# Real-Time-Chat
<h1>MERN Chat App</h1>
![chat](https://github.com/Rukundo-Bahati/Real-Time-Chat/assets/150172206/5e94e5d1-d524-4a86-b564-850918460633)

A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for real-time communication.

<h3>Features</h3>
🔐 User Authentication: Secure login and registration using JWT.
💬 Real-Time Messaging: Instant messaging with real-time updates using Socket.io.
👥 User Management: View online users and manage user profiles.
📂 File Uploads: Share images and files within the chat.
📜 Chat History: Persistent chat history stored in MongoDB.
🌐 Responsive Design: Fully responsive design for desktop and mobile.
Screenshots

Login Screen

Chat Screen

<h3>Tech Stack</h3>
<h4>Frontend:</h4>
React.js
Redux
CSS3 / SCSS
<h4>Backend</h4>
Node.js
Express.js
MongoDB
Socket.io
Others:
JWT for authentication
Nodemon for development
Multer for file uploads
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Rukundo-Bahati/star-chat-app.git
cd star-chat-app
Install server dependencies:

bash
Copy code
cd server
npm install
Install client dependencies:

bash
Copy code
cd ../client
npm install
Set up environment variables:

Create a .env file in the server directory and add your MongoDB URI and JWT secret:
makefile
Copy code
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the server:

bash
Copy code
cd ../server
npm run dev
Run the client:

bash
Copy code
cd ../client
npm start
Usage
Open your browser and go to http://localhost:3000.
Register a new account or log in with an existing account.
Start chatting with online users!

Contributing
Contributions are welcome! Please follow these steps:
Real-Time Chat
Welcome to the Real-Time Chat repository! This project is a fully functional real-time chat application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It leverages WebSockets for instant communication, providing a seamless and interactive messaging experience.

Features
Real-Time Messaging: Send and receive messages instantly using WebSockets.
User Authentication: Secure user registration and login with JWT (JSON Web Tokens).
Chat Rooms: Create and join chat rooms to converse with multiple participants.
Private Messaging: Send direct messages to individual users.
Message History: Persistent message history stored in MongoDB.
Responsive Design: Fully responsive UI for an optimal experience on both desktop and mobile devices.
Technologies Used
Frontend:

React.js: For building the user interface.
Redux: State management for React.
CSS Modules: Scoped and maintainable styles.
Backend:

Node.js: Server-side runtime environment.
Express.js: Web framework for Node.js.
WebSocket: Real-time communication.
MongoDB: NoSQL database for storing user data and messages.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
JWT: Secure authentication mechanism.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/real-time-chat.git
cd real-time-chat
Install dependencies for the backend:

bash
Copy code
cd backend
npm install
Install dependencies for the frontend:

bash
Copy code
cd ../frontend
npm install
Set up environment variables:
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
Run the backend server:

bash
Copy code
cd backend
npm start
Run the frontend development server:

bash
Copy code
cd ../frontend
npm start
Access the application:
Open your browser and navigate to http://localhost:3000.

Usage
Register an account: Sign up with your email and password.
Login: Use your credentials to log in.
Create or join a chat room: Start a new conversation or join an existing one.
Send messages: Chat in real-time with other users in the chat room.
View message history: See the history of conversations in the chat room.
Contributing
We welcome contributions to enhance the functionality and performance of the Real-Time Chat application. To contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with clear and concise messages.
Push your changes to your fork.
Create a pull request describing your changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Socket.IO for real-time communication.
JWT for secure authentication.
React for the powerful UI library.
Express.js for the robust backend framework.
MongoDB for the scalable database solution.
Contact
If you have any questions, suggestions, or feedback, feel free to reach out at your-email@example.com.

Thank you for using Real-Time Chat! We hope you enjoy using it as much as we enjoyed building it.

Email: rukundorca@gmail.com
LinkedIn: https://www.linkedin.com/in/bahati-samuel-293578302/
GitHub: https://github.com/Rukundo-Bahati?tab=repositories
