const bcrypt = require("bcrypt");

function validatePassword(plaintext, encryptedPassword) {
    try {
        return bcrypt.compareSync(plaintext, encryptedPassword);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    validatePassword,
};
