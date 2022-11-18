"use strict";
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkAuthorizationAction = require("../middleware/authorization");
const { generatePDF } = require("../app/controllers/ReportController");
const routes = require("../resources/routes");

/**
 * Generate a report PDF
 * @openapi
 * /reports/pdf/{id}:
 *  get:
 *    tags:
 *    - reportPDF
 *    summary: "Generar un reporte PDF"
 *    description: "Endpoint para generar un reporte de un estudio de carga de fuego acerca de una institución del usuario que realiza la petición"
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
 *              $ref: "#/components/schemas/Report"
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
  routes.reports.types.pdf + routes.institutions.institutionId,
  authMiddleware,
  checkAuthorizationAction,
  generatePDF
);

module.exports = router;
