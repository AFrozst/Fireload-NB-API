"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const authMiddleware = require("../middleware/session");
const FireSectorController = require("../app/controllers/FireSectorController");
const checkAuthorizationAction = require("../middleware/authorization");

router.get(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.getFireSectorsByInstitutionId
);
router.get(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.getFireSectorById
);
router.post(
  routes.institutions.institutionId + routes.fireSectors.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.createFireSector
);
router.put(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.updateFireSector
);
router.delete(
  routes.institutions.institutionId + routes.fireSectors.url + routes.id,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.deleteFireSector
);

router.post(
  routes.institutions.institutionId +
    routes.fireSectors.url +
    routes.id +
    routes.materials.url,
  authMiddleware,
  checkAuthorizationAction,
  FireSectorController.addCombustibleMaterial
);

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
