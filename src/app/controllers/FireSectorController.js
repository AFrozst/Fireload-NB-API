"use strict";

const { FireSector, Institution, CombustibleMaterial } = require("../models");

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
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
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
        return res.status(404).send({
          errorMessage: "Fire Sector not found",
        });
      }
      return res.status(200).send({
        data: fireSector,
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
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
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },

  updateFireSector: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });
      if (!fireSector) {
        return res.status(404).send({
          errorMessage: "Institution or Fire Sector not found",
        });
      }
      fireSector.update({ ...req.body, update: new Date() });
      return res.status(200).send({
        message: "Fire Sector updated successfully",
        data: fireSector,
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },

  deleteFireSector: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });
      if (!fireSector) {
        return res.status(404).send({
          errorMessage: "Institution or Fire Sector not found",
        });
      }
      fireSector.destroy();
      return res.status(200).send({
        message: "Fire Sector deleted successfully",
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },

  addCombustibleMaterial: async (req, res) => {
    try {
      const { institutionId, id } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });
      if (!fireSector) {
        return res.status(404).send({
          errorMessage: "Institution or Fire Sector not found",
        });
      }

      let material = await CombustibleMaterial.findByPk(req.body.materialId);
      if (!material) {
        return res.status(404).send({
          errorMessage: "Combustible Material not found",
        });
      }

      console.log(req.body);
      let { materialId, weight, totalCalorificValue } = req.body;

      await fireSector.addMaterial(materialId, {
        through: { weight, totalCalorificValue },
      });
      return res.status(200).send({
        message: "Combustible material added successfully",
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },
};

module.exports = FireSectorController;
