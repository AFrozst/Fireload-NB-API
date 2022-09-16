"use strict";
const express = require("express");
const router = express.Router();
const routes = require("../resources/routes");
const CombustibleMaterialController = require("../app/controllers/CombustibleMaterialController");

router.get(routes.empty, CombustibleMaterialController.getCombustibleMaterials);
router.get(routes.id, CombustibleMaterialController.getCombustibleMaterial);
module.exports = router;
