const handleHttpError = (res, error ) => {
  const status = 500;
  const errorMessage = error || "Internal Server Error";
  return res.status(status).send({ error: errorMessage });
};

const handleHttpErrorResponse = (res, message, code) => {
  const status = code || 500;
  const errorMessage = message || "Internal Server Error";
  return res.status(status).send({ error: errorMessage });
};

module.exports = {
  handleHttpError,
  handleHttpErrorResponse,
};
