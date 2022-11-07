"use strict";
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkAuthorizationAction = require("../middleware/authorization");
const { generatePDF } = require("../app/controllers/ReportController");
const routes = require("../resources/routes");

router.get(
  routes.reports.types.pdf + routes.institutions.institutionId,
  authMiddleware,
  checkAuthorizationAction,
  generatePDF
);

module.exports = router;
