"use strict";
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const InstitutionController = require("../app/controllers/InstitutionController");
const routes = require("../resources/routes");

router.get(routes.empty, authMiddleware, InstitutionController.getInstitutions);
router.get(routes.id, authMiddleware, InstitutionController.getInstitution);
router.post(routes.empty, authMiddleware, InstitutionController.createInstitution);
router.put(routes.id, authMiddleware,InstitutionController.updateInstitution);
router.delete(routes.id, authMiddleware,InstitutionController.deleteInstitution);

module.exports = router;
