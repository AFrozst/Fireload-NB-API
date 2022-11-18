const {
  handleHttpError,
  handleHttpErrorResponse,
} = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return handleHttpErrorResponse(
        res,
        "No se ha enviado el token de autenticación",
        401
      );
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);
    if (!dataToken) {
      return handleHttpErrorResponse(
        res,
        "El token de autenticación no es válido",
        401
      );
    }

    req.user = dataToken;
    next();
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = authMiddleware;
