"use strict";
const express = require("express");
const router = express.Router();
const { validateRegister, validateLogin } = require("../validators/auth");
const { registerController, loginController } = require("../app/controllers/AuthController");
const routes = require("../resources/routes");

router.post(routes.auth.register, validateRegister, registerController);
router.post(routes.auth.login, validateLogin, loginController);

module.exports = router;
