const { Logger } = require("../config");
const { UserService } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const Strings = require("../utils/strings/airplane.string");

async function createUser(req, res) {
    try {
        const response = await UserService.createUser({
            email: req.body.email,
            password: req.body.password,
        });
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getUser(req, res) {
    try {
        const response = await UserService.getUser(req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllUser(req, res) {
    try {
        const response = await UserService.getAllUser(req.body.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = Strings.CRATED;
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateUser(req, res) {
    try {
        const response = await UserService.updateUser(req.body, req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully updated the airplane";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteUser(req, res) {
    try {
        const response = await UserService.deleteUser(req.params.id);
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully deleted the airplane";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function signIn(req, res) {
    try {
        const response = await UserService.signIn({
            email: req.body.email,
            password: req.body.password,
        });
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully signed the airplane";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function authenticate(req, res) {
    try {
        const response = await UserService.authenticate({
            token: req.body.token,
        });
        Logger.info(Strings.CRATED);

        SuccessResponse.message = "successfully signed the airplane";
        SuccessResponse.data = response;

        return res.json(SuccessResponse);
    } catch (error) {
        Logger.error(`${Strings.FAILED_CREATE} : ${error.message}`);

        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createUser,
    getUser,
    getAllUser,
    deleteUser,
    updateUser,
    signIn,
    authenticate,
};
