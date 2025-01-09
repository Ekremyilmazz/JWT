const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const authRoutes = require("./routes/authRoutes");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

// Main route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the JWT Auth API."
    });
});

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB
mongoose.connect(config.mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
        // Start the server
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log("SIGTERM received. Shutting down gracefully...");
    mongoose.connection.close();
    process.exit(0);
});

module.exports = app;

