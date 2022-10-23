const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");

const validateRegister = [
  check("name")
    .exists()
    .withMessage("El campo nombre es requerido")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacío")
    .isLength({ min: 3, max: 50 })
    .withMessage("El campo nombre debe tener entre 3 y 50 caracteres"),
  check("email")
    .exists()
    .withMessage("El campo email es requerido")
    .notEmpty()
    .withMessage("El campo email no puede estar vacío")
    .isEmail()
    .withMessage("El campo email debe ser un email válido"),
  check("password")
    .exists()
    .withMessage("El campo contraseña es requerido")
    .notEmpty()
    .withMessage("El campo contraseña no puede estar vacío")
    .isLength({ min: 6, max: 15 })
    .withMessage("El campo contraseña debe tener entre 6 y 15 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateLogin = [
  check("email")
    .exists()
    .withMessage("El campo email es requerido")
    .notEmpty()
    .withMessage("El campo email no puede estar vacío")
    .isEmail()
    .withMessage("El campo email debe ser un email válido"),
  check("password")
    .exists()
    .withMessage("El campo contraseña es requerido")
    .notEmpty()
    .withMessage("El campo contraseña no puede estar vacío"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = { validateRegister, validateLogin };
