"use strict";
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkAuthorizationAction = require("../middleware/authorization");
const InstitutionController = require("../app/controllers/InstitutionController");
const routes = require("../resources/routes");

/**
 * Get institutions
 * @openapi
 * /institutions:
 *  get:
 *    tags:
 *    - institution
 *    summary: "Obtener mis instituciones"
 *    description: "Endpoint para obtener las instituciones del usuario que realiza la petición"
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Institution"
 *      '401':
 *        description: Error de autenticación
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(routes.empty, authMiddleware, InstitutionController.getInstitutions);

/**
 * Create a institution
 * @openapi
 * /institutions:
 *  post:
 *    tags:
 *    - institution
 *    summary: "Crear una nueva institución"
 *    description: "Endpoint para crear una nueva institución del usuario"
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/NewInstitution"
 *    responses:
 *      '201':
 *        description: OK Institución creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Institution"
 *      '401':
 *        description: Error de autenticación
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.post(
  routes.empty,
  authMiddleware,
  InstitutionController.createInstitution
);

/**
 * Get a institutions
 * @openapi
 * /institutions/{id}:
 *  get:
 *    tags:
 *    - institution
 *    summary: "Obtener una institución"
 *    description: "Endpoint para obtener una institución del usuario que realiza la petición"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Institution"
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado la institución
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.id,
  authMiddleware,
  checkAuthorizationAction,
  InstitutionController.getInstitution
);

/**
 * Update a institutions
 * @openapi
 * /institutions/{id}:
 *  put:
 *    tags:
 *    - institution
 *    summary: "Actualizar una institución"
 *    description: "Endpoint para actualizar una institución del usuario que realiza la petición"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/NewInstitution"
 *    responses:
 *      '200':
 *        description: OK Institución actualizado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado la institución
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.put(
  routes.id,
  authMiddleware,
  checkAuthorizationAction,
  InstitutionController.updateInstitution
);

/**
 * Delete a institutions
 * @openapi
 * /institutions/{id}:
 *  delete:
 *    tags:
 *    - institution
 *    summary: "Eliminar una institución"
 *    description: "Endpoint para eliminar una institución del usuario que realiza la petición"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      '200':
 *        description: OK Institución eliminado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado la institución
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.delete(
  routes.id,
  authMiddleware,
  checkAuthorizationAction,
  InstitutionController.deleteInstitution
);

module.exports = router;
