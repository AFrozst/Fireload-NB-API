"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const authMiddleware = require("../middleware/session");
const FireSectorController = require("../app/controllers/FireSectorController");
const checkAuthorizationAction = require("../middleware/authorization");

/**
 * Get all fire sector from a institution
 * @openapi
 * /institutions/{institutionId}/fireSectors:
 *  get:
 *    tags:
 *    - fire sector
 *    summary: "Obtener mis sectores de incendio de una institución"
 *    description: "Endpoint para obtener los sectores de incendio de una institución"
 *    parameters:
 *      - name: institutionId
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
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FireSector"
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.getFireSectorsByInstitutionId
);

/**
 * Create a fire sector from a institution
 * @openapi
 * /institutions/{institutionId}/fireSectors:
 *  post:
 *    tags:
 *    - fire sector
 *    summary: "Crear un nuevo sector de incendio"
 *    description: "Endpoint para crear un nuevo sector de incendio en una institución"
 *    parameters:
 *      - name: institutionId
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
 *            $ref: "#/components/schemas/NewFireSector"
 *    responses:
 *      '201':
 *        description: OK Sector de incendio creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/FireSector"
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.post(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.createFireSector
);

/**
 * Get a fire sector from a institution
 * @openapi
 * /institutions/{institutionId}/fireSectors/{id}:
 *  get:
 *    tags:
 *    - fire sector
 *    summary: "Obtener un sector de incendio de una institución"
 *    description: "Endpoint para obtener un sector de incendio especifico de una institución"
 *    parameters:
 *      - name: institutionId
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: id
 *        in: path
 *        description: Id del sector de incendio
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
 *              $ref: "#/components/schemas/FireSectorWithMaterials"
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado el sector de incendio
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.get(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.getFireSectorById
);

/**
 * Update a fire sector from a institution
 * @openapi
 * /institutions/{institutionId}/fireSectors/{id}:
 *  put:
 *    tags:
 *    - fire sector
 *    summary: "Actualizar un sector de incendio de una institución"
 *    description: "Endpoint para actualizar un sector de incendio de una institución"
 *    parameters:
 *      - name: institutionId
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: id
 *        in: path
 *        description: Id del sector de incendio
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/NewFireSector"
 *    responses:
 *      '200':
 *        description: OK Sector de incendio actualizado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado el sector de incendio
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.put(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.updateFireSector
);

/**
 * Delete a fire sector from a institution
 * @openapi
 * /institutions/{institutionId}/fireSectors/{id}:
 *  delete:
 *    tags:
 *    - fire sector
 *    summary: "Eliminar un sector de incendio de una institución"
 *    description: "Endpoint para eliminar un sector de incendio de una institución"
 *    parameters:
 *      - name: institutionId
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: id
 *        in: path
 *        description: Id del sector de incendio
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      '200':
 *        description: OK Sector de incendio eliminado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: No se ha encontrado el sector de incendio
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.delete(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.deleteFireSector
);

/**
 * Add or Update a combustible materia to a fire sector
 * @openapi
 * /institutions/{institutionId}/fireSectors/{id}/materials:
 *  post:
 *    tags:
 *    - fire sector
 *    summary: "Agregar o actualizar un material combustible a un sector de incendio"
 *    description: "Endpoint para agregar o actualizar un material combustible a un sector de incendio"
 *    parameters:
 *      - name: institutionId
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: id
 *        in: path
 *        description: Id del sector de incendio
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              materialId:
 *                type: integer
 *                description: El id del material combustible
 *              weight:
 *                type: number
 *                description: El peso del material combustible
 *              ci:
 *                type: number
 *                description: El coeficiente de ignición del material combustible
 *    responses:
 *      '200':
 *        description: OK Material combustible agregado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: Material combustible no encontrado
 *      '409':
 *        description: El material combustible ya fue agregado al sector de incendio
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.post(
  routes.institutions.institutionId +
    routes.fireSectors.url +
    routes.id +
    routes.materials.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.addCombustibleMaterial
);

/**
 * Delete a combustible materia to a fire sector
 * @openapi
 * /institutions/{institutionId}/fireSectors/{id}/materials/{materialId}:
 *  delete:
 *    tags:
 *    - fire sector
 *    summary: "Eliminar un material combustible a un sector de incendio"
 *    description: "Endpoint para eliminar un material combustible a un sector de incendio"
 *    parameters:
 *      - name: institutionId
 *        in: path
 *        description: Id de la institución
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: id
 *        in: path
 *        description: Id del sector de incendio
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - name: materialId
 *        in: path
 *        description: Id del material combustible
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      '200':
 *        description: OK Material combustible eliminado correctamente
 *      '401':
 *        description: Error de autenticación
 *      '403':
 *        description: No tienes permisos para realizar esta acción
 *      '404':
 *        description: Material combustible no encontrado
 *      '409':
 *        description: El material combustible no fue agregado al sector de incendio
 *      '500':
 *        description: Error interno del servidor
 *    security:
 *     - bearerAuth: []
 */
router.delete(
  routes.institutions.institutionId +
    routes.fireSectors.url +
    routes.id +
    routes.materials.url +
    routes.materials.materialId,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.removeCombustibleMaterial
);

module.exports = router;
