"use strict";
const express = require("express");
const router = express.Router();
const { validateRegister } = require("../validators/auth");
const { registerController } = require("../app/controllers/AuthController");

/**
 *
 */
// TODO http://localhost:5000/api/auth/login
// TODO http://localhost:5000/api/auth/register
router.post("/register", validateRegister, registerController);

module.exports = router;
