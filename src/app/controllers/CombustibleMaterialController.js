"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
      let combustibleMaterial = await CombustibleMaterial.findOne({
        where: { id },
        raw: true,
        nest: true,
      });

      if (!combustibleMaterial) {
        return handleHttpErrorResponse(
          res,
          "Material Combustible no encontrado",
          404
        );
      }
      return res.status(200).send({
        data: combustibleMaterial,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  searchCombustibleMaterial: async (req, res) => {
    try {
      let { query } = req.query;

      let combustibleMaterials = await CombustibleMaterial.findAll({
        where: Sequelize.where(
          Sequelize.fn("unaccent", Sequelize.col("name")),
          {
            [Op.iLike]: query + "%",
            [Op.iLike]: "%" + query + "%",
          }
        ),
        order: [["name", "ASC"]],
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
};

module.exports = CombustibleMaterialController;
