const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get('/me', auth, async (req, res) => {
    try {
        console.log('User ID:', req.userId);

        const user = await User.findById(req.userId).select('-password');
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch user data.",
            error: error.message
        });
    }
});

module.exports = router;

