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
router.post(
  routes.institutions.institutionId + routes.fireSectors.url,
  FireSectorController.createFireSector
);
router.put(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  FireSectorController.updateFireSector
);
router.delete(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  FireSectorController.deleteFireSector
);

module.exports = router;
