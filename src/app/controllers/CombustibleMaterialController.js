"use strict";

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
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
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
        return res.status(404).send({
          errorMessage: "Combustible Material not found",
        });
      }
      return res.status(200).send({
        data: combustibleMaterial,
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
    }
  },
};

module.exports = CombustibleMaterialController;
