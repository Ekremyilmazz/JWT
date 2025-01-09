const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = async (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided."
            });
        }

        const token = authHeader.replace("Bearer ", "");
        const decoded = jwt.verify(token, config.jwtSecret);

        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token."
        });
    }
};

module.exports = auth;
