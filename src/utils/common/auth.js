const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { ServerConfig } = require("../../config");

function validatePassword(plaintext, encryptedPassword) {
    try {
        return bcrypt.compareSync(plaintext, encryptedPassword);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function createJWT(input) {
    try {
        return jwt.sign(input, ServerConfig.JWT_SECRET, {
            expiresIn: ServerConfig.JWT_EXPIRY,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function verifyJWT(input) {
    try {
        return jwt.verify(input.token, ServerConfig.JWT_SECRET);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    validatePassword,
    createJWT,
    verifyJWT,
};
