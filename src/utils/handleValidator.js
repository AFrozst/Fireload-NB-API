const { validationResult } = require("express-validator"); //TODO:

const validateResult = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    return next();
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = { validateResult };
