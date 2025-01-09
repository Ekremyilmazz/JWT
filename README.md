# JWT Authentication API

This project is a JWT (JSON Web Token) based authentication API developed using Node.js and MongoDB

## Features

- User registration
- User login
- JWT-based authentication
- Protected routes
- Password hashing
- MongoDB database integration

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- POSTMAN (for testing)

## Installation

1. Clone the repository:

   ```bash
   https://github.com/Ekremyilmazz/JWT.git
2. Go to project directory:
   ```
   cd jwt-auth
3. Install dependencies:
   ```
   npm install express mongoose jsonwebtoken bcryptjs dotenv
4. Create .env file (Also create a "JWT" database and "users" collection under "JWT":
   - PORT=3000
   - MONGO_URI=mongodb://localhost:27017/JWT
   - JWT_SECRET=your-secret-key
5. Start the server:
   ```
   npm run dev

## Screenshots:

### Register on Postman:
![image](https://github.com/user-attachments/assets/b4da08c9-47ba-440a-9630-e99d7c881d09)


   
