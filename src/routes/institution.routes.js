"use strict";
const express = require("express");
const router = express.Router();
const InstitutionController = require("../app/controllers/InstitutionController");
const routes = require("../resources/routes");

router.get(routes.empty, InstitutionController.getInstitutions);
router.get(routes.id, InstitutionController.getInstitution);
router.post(routes.empty, InstitutionController.createInstitution);

module.exports = router;
