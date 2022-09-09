"use strict";
const express = require("express");
const router = express.Router();
const FireSectorController = require("../app/controllers/FireSectorController");
const routes = require("../resources/routes");

router.get(
  routes.institutions.institutionId + routes.fireSectors.url,
  FireSectorController.getFireSectorsByInstitutionId
);
router.get(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  FireSectorController.getFireSectorById
);

module.exports = router;
