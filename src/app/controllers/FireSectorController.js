"use strict";

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

      const material = await CombustibleMaterial.findByPk(req.body.material_id);
      if (!material) {
        return res.status(404).send({
          errorMessage: "Combustible Material not found",
        });
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (isAdded) {
        return res.status(409).send({
          errorMessage: "Combustible Material already added",
        });
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
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },

  removeCombustibleMaterial: async (req, res) => {
    try {
      const { institutionId, id, materialId } = req.params;
      let fireSector = await FireSector.findOne({
        where: { id, institutionId },
      });

      if (!fireSector) {
        return res.status(404).send({
          errorMessage: "Institution or Fire Sector not found",
        });
      }

      const material = await CombustibleMaterial.findByPk(
        materialId
      );
      if (!material) {
        return res.status(404).send({
          errorMessage: "Combustible Material not found",
        });
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (!isAdded) {
        return res.status(409).send({
          errorMessage: "Combustible Material not added",
        });
      }

      await fireSector.removeMaterial(material);
      return res.status(200).send({
        message: "Combustible Material removed successfully",
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Unknown error";
      res.status(status).send({ errorMessage });
    }
  },
};

module.exports = FireSectorController;
