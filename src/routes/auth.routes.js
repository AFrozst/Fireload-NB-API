"use strict";
const express = require("express");
const router = express.Router();
const { validateRegister, validateLogin } = require("../validators/auth");
const {
  registerController,
  loginController,
} = require("../app/controllers/AuthController");
const routes = require("../resources/routes");

/**
 * Register a new user
 * @openapi
 * /auth/register:
 *  post:
 *    tags:
 *    - authorization
 *    summary: "Registrar usuario"
 *    description: "Endpoint para registrar un nuevo usuario a Fireload NB"
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *          $ref: "#/components/schemas/NewUser"
 *    responses:
 *      '201':
 *        description: Usuario creado correctamente
 *      '400':
 *        description: Error al crear el usuario en alguno de sus valores o el usuario ya existe
 *      '500':
 *        description: Error interno del servidor
 */
router.post(routes.auth.register, validateRegister, registerController);

/**
 * Login a user
 * @openapi
 * /auth/login:
 *  post:
 *    tags:
 *    - authorization
 *    summary: "Iniciar sesión de un usuario"
 *    description: "Endpoint para iniciar sesión de un usuario a Fireload NB"
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *          $ref: "#/components/schemas/User"
 *    responses:
 *      '200':
 *        description: OK Inicio sesión correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Usuario inició sesión correctamente
 *                token:
 *                  type: string
 *                  description: Token de autenticación
 *                user:
 *                  $ref: "#/components/schemas/NewUser"
 *      '400':
 *        description: Credenciales incorrectas
 *      '500':
 *        description: Error interno del servidor
 */
router.post(routes.auth.login, validateLogin, loginController);

module.exports = router;
