const { StatusCodes } = require("http-status-codes");

const { UserRepository } = require("../repository");
const AppError = require("../utils/error/AppError");
const Auth = require("../utils/common/auth");

const userRepository = new UserRepository();

async function createUser(data) {
    try {
        const response = await userRepository.create(data);
        return response;
    } catch (error) {
        if (
            error.name == "SequelizeValidationError" ||
            error.name == "SequelizeUniqueConstraintError"
        ) {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(error, StatusCodes.BAD_REQUEST);
    }
}

async function getUser(id) {
    try {
        const response = await userRepository.get(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function getAllUser() {
    try {
        const response = await userRepository.getAll();
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function updateUser(data, id) {
    try {
        const response = await userRepository.update(data, id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function deleteUser(id) {
    try {
        const response = await userRepository.delete(id);
        return response;
    } catch (error) {
        throw new AppError(error.message, StatusCodes.BAD_REQUEST);
    }
}

async function signIn(data) {
    try {
        const userDetail = await userRepository.getUserByEmail(data.email);

        console.log(userDetail.password, data.password);

        const valid = Auth.validatePassword(data.password, userDetail.password);

        // console.log(valid);

        if (!valid) {
            throw new AppError("Invalid password", StatusCodes.BAD_REQUEST);
        }

        const jwt = Auth.createJWT({
            id: userDetail.id,
            email: userDetail.email,
        });

        return jwt;
    } catch (error) {
        console.log(error);
        throw new AppError(
            "Invalid email or password",
            StatusCodes.UNAUTHORIZED
        );
    }
}

async function authenticate(token) {
    try {
        if (!token) {
            throw new AppError(
                "token not found in upcomming request",
                StatusCodes.BAD_REQUEST
            );
        }

        const response = Auth.verifyJWT(token);

        const user = await userRepository.get(response.id);

        if (!user) {
            throw new AppError(
                "user not found with jwt token",
                StatusCodes.BAD_REQUEST
            );
        }

        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUser,
    updateUser,
    deleteUser,
    signIn,
    authenticate,
};
