const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config");

// Token oluşturma yardımcı fonksiyonu
const generateToken = (userId) => {
    return jwt.sign({id: userId}, config.jwtSecret, {
        expiresIn: config.jwtExpiration
    });
};

// Register a new user
const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }

        // Create a new user
        const user = new User({
            email,
            password
        });

        // Save the user to the database
        await user.save();

        // Generate a token for the new user
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            data: {
                user: {
                    id: user._id,
                email: user.email,
                },
                token
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Registration failed.",
            error: error.message
        })
    }
};

// Login a user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Check if password is correct
        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        // Generate a token for the user
        const token = generateToken(user._id);

        res.json({
            success: true,
            data: {
                user: {
                    id: user._id,
                    email: user.email,
                },
                token
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Login failed.",
            error: error.message
        });
    }
};

module.exports = { register, login };
