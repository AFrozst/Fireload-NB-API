const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegister = [
  check("name")
    .exists()
    .withMessage("Name is required")
    .notEmpty()
    .withMessage("Name is cannot be blank")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be between 3 and 50 characters"),
  check("email")
    .exists()
    .withMessage("Email is required")
    .notEmpty()
    .withMessage("Email is cannot be blank")
    .isEmail()
    .withMessage("Email must be valid email address"),
  check("password")
    .exists()
    .withMessage("Password is required")
    .notEmpty()
    .withMessage("Password is cannot be blank")
    .isLength({ min: 6, max: 15 })
    .withMessage("Password must be between 6 and 15 characters"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateLogin = [
  check("email")
    .exists()
    .withMessage("Email is required")
    .notEmpty()
    .withMessage("Email is cannot be blank")
    .isEmail()
    .withMessage("Email must be valid email address"),
  check("password")
    .exists()
    .withMessage("Password is required")
    .notEmpty()
    .withMessage("Password is cannot be blank")
    .isLength({ min: 6, max: 15 })
    .withMessage("Password must be between 6 and 15 characters"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = { validateRegister, validateLogin };
