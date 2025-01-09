require("dotenv").config();

const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration:"24h"
};

module.exports = config;