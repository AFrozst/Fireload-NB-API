"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const authMiddleware = require("../middleware/session");
const FireSectorController = require("../app/controllers/FireSectorController");

router.get(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  FireSectorController.getFireSectorsByInstitutionId
);
router.get(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  FireSectorController.getFireSectorById
);
router.post(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  FireSectorController.createFireSector
);
router.put(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  FireSectorController.updateFireSector
);
router.delete(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  FireSectorController.deleteFireSector
);

router.post(
  routes.institutions.institutionId +
    routes.fireSectors.url +
    routes.id +
    routes.materials.url,
  authMiddleware,
  FireSectorController.addCombustibleMaterial
);

router.delete(
  routes.institutions.institutionId +
    routes.fireSectors.url +
    routes.id +
    routes.materials.url +
    routes.materials.materialId,
  authMiddleware,
  FireSectorController.removeCombustibleMaterial
);

module.exports = router;
