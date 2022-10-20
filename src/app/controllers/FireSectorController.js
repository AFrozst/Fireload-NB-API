"use strict";

const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");
const {
  FireSector,
  Institution,
  CombustibleMaterial,
  Sector_Material,
} = require("../models");

const FireSectorController = {
  getFireSectorsByInstitutionId: async (req, res) => {
    try {
      const { institutionId } = req.params;
      let fireSectors = await FireSector.findAll({
        where: { institutionId },
        include: ["institution"],
      });
      return res.status(200).send({
        data: fireSectors,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  getFireSectorById: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
        include: [
          {
            model: Institution,
            as: "institution",
          },
          {
            model: CombustibleMaterial,
            as: "materials",
            //through: {
            //attributes: ["weight", "totalCalorificValue"],
            //},
          },
        ],
      });
      if (!fireSector) {
        return handleHttpErrorResponse(res, "FireSector not found", 404);
      }

      return res.status(200).send({
        data: fireSector,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  createFireSector: async (req, res) => {
    try {
      const { institutionId } = req.params;
      let newFireSector = await FireSector.create({
        ...req.body,
        institutionId,
      });
      let institution = await Institution.findByPk(institutionId);
      institution.numberFireSectors += 1;
      institution.save();

      return res.status(201).send({
        message: "FireSector created successfully",
        data: newFireSector,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  updateFireSector: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });
      if (!fireSector) {
        return handleHttpErrorResponse(res, "FireSector not found", 404);
      }

      fireSector.update({ ...req.body, update: new Date() });
      return res.status(200).send({
        message: "Fire Sector updated successfully",
        data: fireSector,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  deleteFireSector: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });
      if (!fireSector) {
        return handleHttpErrorResponse(res, "FireSector not found", 404);
      }

      fireSector.destroy();
      return res.status(200).send({
        message: "Fire Sector deleted successfully",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  addCombustibleMaterial: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });

      if (!fireSector) {
        return handleHttpErrorResponse(res, "FireSector not found", 404);
      }

      const material = await CombustibleMaterial.findByPk(req.body.material_id);
      if (!material) {
        return handleHttpErrorResponse(res, "Combustible Material not found", 404);
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (isAdded) {
        return handleHttpErrorResponse(res, "Combustible Material already added", 409);
      }

      let { material_id, weight, totalCalorificValue } = req.body;
      /*const created = await fireSector.addMaterial(material, {
        through: { weight, totalCalorificValue },
      });*/
      await Sector_Material.create({
        sector_id: id,
        material_id,
        weight,
        totalCalorificValue,
      });
      return res.status(200).send({
        message: "Combustible Material added successfully",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  removeCombustibleMaterial: async (req, res) => {
    try {
      const { institutionId, id, materialId } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });

      if (!fireSector) {
        return handleHttpErrorResponse(res, "FireSector not found", 404);
      }

      const material = await CombustibleMaterial.findByPk(materialId);
      if (!material) {
        return handleHttpErrorResponse(res, "Combustible Material not found", 404);
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (!isAdded) {
        return handleHttpErrorResponse(res, "Combustible Material not added", 409);
      }

      await fireSector.removeMaterial(material);
      return res.status(200).send({
        message: "Combustible Material removed successfully",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },
};

module.exports = FireSectorController;
