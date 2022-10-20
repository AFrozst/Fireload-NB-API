const {
  handleHttpError,
  handleHttpErrorResponse,
} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return handleHttpErrorResponse(res, "Need authorization header", 401); // 401 Unauthorized
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken) {
      return handleHttpErrorResponse(res, "Token Invalid", 401);
    }

    req.user = dataToken;
    next();
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = authMiddleware;
