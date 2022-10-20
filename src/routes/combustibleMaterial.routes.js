"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const authMiddleware = require("../middleware/session");
const CombustibleMaterialController = require("../app/controllers/CombustibleMaterialController");

router.get(
  routes.empty,
  authMiddleware,
  CombustibleMaterialController.getCombustibleMaterials
);
router.get(
  routes.id,
  authMiddleware,
  CombustibleMaterialController.getCombustibleMaterial
);
module.exports = router;
