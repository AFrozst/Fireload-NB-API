"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const authMiddleware = require("../middleware/session");
const CombustibleMaterialController = require("../app/controllers/CombustibleMaterialController");

/**
 * Get all combustibles materials
 * @openapi
 * /materials:
 *  get:
 *    tags:
 *    - combustible material
 *    summary: "Obtener todos los materiales combustibles"
 *    description: "Endpoint para obtener todos los materiales combustibles de Fireload NB"
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/CombustibleMaterial"
 *      '401':
 *        description: Error de autenticación
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.empty,
  authMiddleware,
  CombustibleMaterialController.getCombustibleMaterials
);

/**
 * Seacrh combustibles materials by name
 * @openapi
 * /materials/search?query={name}:
 *  get:
 *    tags:
 *    - combustible material
 *    summary: "Buscar los materiales combustibles por el nombre"
 *    description: "Endpoint para buscar y obtener todos los materiales combustibles de Fireload NB con cierto nombre"
 *    parameters:
 *      - name: query
 *        in: query
 *        description: Nombre del material combustible
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/CombustibleMaterial"
 *      '401':
 *        description: Error de autenticación
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.search,
  authMiddleware,
  CombustibleMaterialController.searchCombustibleMaterial
);

/**
 * Get combustible material by id
 * @openapi
 * /materials/{id}:
 *  get:
 *    tags:
 *    - combustible material
 *    summary: "Obtener un material combustible"
 *    description: "Endpoint para obtener el material combustible de Fireload NB según el id"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id del material combustible
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
 *              $ref: "#/components/schemas/CombustibleMaterial"
 *      '401':
 *        description: Error de autenticación
 *      '404':
 *        description: No se ha encontrado el material combustible
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.id,
  authMiddleware,
  CombustibleMaterialController.getCombustibleMaterial
);
module.exports = router;
