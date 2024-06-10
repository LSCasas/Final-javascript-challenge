const createError = require('http-errors');
const jwt = require('../lib/jwt');
const userUsecase = require('../usecases/users.usecase');

async function auth(request, response, next) {
    try {
        const token = request.headers.authorization;
        if (!token) {
            throw createError(401, "JWT is required");
        }

        const payload = jwt.verify(token);
        const user = await userUsecase.getById(payload.id);

        if (!user) {
            throw createError(404, "User not found");
        }

        request.user = user;

        next();
    } catch (error) {
        response.status(error.status || 401).json({
            success: false,
            error: error.message,
        });
    }
}

module.exports = auth;
