const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegister = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters"),
  check("email")
    .exists()
    .withMessage("Email is required")
    .notEmpty()
    .isEmail()
    .withMessage("Email is not valid"),
  check("password")
    .exists()
    .withMessage("Password is required")
    .notEmpty()
    .isLength({ min: 6, max: 15 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateRegister };
