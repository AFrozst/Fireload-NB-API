"use strict";

const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");
const { CombustibleMaterial } = require("../models");

const CombustibleMaterialController = {
  getCombustibleMaterials: async (req, res) => {
    try {
      let combustibleMaterials = await CombustibleMaterial.findAll({
        raw: true,
        nest: true,
      });
      return res.status(200).send({
        data: combustibleMaterials,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  getCombustibleMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req);
      let combustibleMaterial = await CombustibleMaterial.findOne({
        where: { id },
        raw: true,
        nest: true,
      });

      if (!combustibleMaterial) {
        return handleHttpErrorResponse(res, "Combustible Material not found", 404);
      }
      return res.status(200).send({
        data: combustibleMaterial,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },
};

module.exports = CombustibleMaterialController;
