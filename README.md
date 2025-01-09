# JWT Authentication API

This JWT Authentication API provides a secure user authentication system with the following core functionalities:

- **User Management**: Handles user registration and login operations securely
- **Token-Based Authentication**: Uses JWT (JSON Web Token) for maintaining user sessions
- **Password Security**: Implements bcrypt hashing for secure password storage
- **Protected Routes**: Ensures secure access to user-specific data
- **Database Integration**: Stores user information in MongoDB with Mongoose ODM

### Key Features

- Secure password hashing using bcryptjs
- JWT token generation and validation
- Protected routes for authenticated users only
- MongoDB integration for persistent data storage
- Error handling and validation
- Environment variable configuration

### Use Cases

- User registration with email and password
- Secure login with JWT token generation
- Protected routes for authenticated users
- User data retrieval with token validation
- Session management using JWT

This API can serve as a foundation for any application requiring user authentication and secure route access.

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

### 1-)Register on Postman:
![image](https://github.com/user-attachments/assets/b4da08c9-47ba-440a-9630-e99d7c881d09)

### 2-)Saving the user data in MongoDB Compass (you can also use MongoDB Atlas):
![image](https://github.com/user-attachments/assets/6c19b9be-bd11-4655-ba3f-497ec616fecd)

### 3-)Login on Postman:
![image](https://github.com/user-attachments/assets/e909f1fd-1101-4fda-aea1-648be0c2b7bf)

### 4-)Get the user data from the MongoDB (It doesn't get the user password because of the protected route):
![image](https://github.com/user-attachments/assets/40f12ba4-eec2-4b40-9610-7508cbcb8605)
