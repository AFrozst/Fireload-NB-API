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
        order: [["updatedAt", "DESC"]],
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
            through: {
              model: Sector_Material,
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          },
        ],
        order: [
          [
            {
              model: CombustibleMaterial,
              as: "materials",
            },
            "id",
            "ASC",
          ],
        ],
      });
      if (!fireSector) {
        return handleHttpErrorResponse(
          res,
          "Sector de incendio no encontrado",
          404
        );
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
      institution.updatedAt = new Date();
      await institution.save();

      return res.status(201).send({
        message: "Sector de incendio creado correctamente",
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
        return handleHttpErrorResponse(
          res,
          "Sector de incendio no encontrado",
          404
        );
      }

      await fireSector.update({ ...req.body, updatedAt: new Date() });
      await Institution.update(
        { updatedAt: new Date() },
        { where: { id: institutionId } }
      );

      return res.status(200).send({
        message: "Sector de incendio actualizado correctamente",
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
        return handleHttpErrorResponse(
          res,
          "Sector de incendio no encontrado",
          404
        );
      }

      const institution = await Institution.findByPk(institutionId);
      institution.numberFireSectors -= 1;
      institution.updatedAt = new Date();
      await institution.save();

      await fireSector.destroy();
      return res.status(200).send({
        message: "Sector de incendio eliminado correctamente",
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
        return handleHttpErrorResponse(
          res,
          "Sector de incendio no encontrado",
          404
        );
      }

      const material = await CombustibleMaterial.findByPk(req.body.materialId);
      if (!material) {
        return handleHttpErrorResponse(
          res,
          "Material combustible no encontrado",
          404
        );
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (isAdded) {
        return handleHttpErrorResponse(
          res,
          "El material combustible ya fue agregado al sector de incendio",
          409
        );
      }

      let { materialId, weight, total, ci } = req.body;
      /*const created = await fireSector.addMaterial(material, {
        through: { weight, totalCalorificValue },
      });*/
      await Sector_Material.create({
        sectorId: id,
        materialId,
        weight,
        total,
        ci,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      fireSector.numberMaterials += 1;
      fireSector.updatedAt = new Date();
      await fireSector.save();

      await Institution.update(
        { updatedAt: new Date() },
        { where: { id: institutionId } }
      );

      return res.status(200).send({
        message: "Material combustible agregado correctamente",
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
        return handleHttpErrorResponse(
          res,
          "Sector de incendio no encontrado",
          404
        );
      }

      const material = await CombustibleMaterial.findByPk(materialId);
      if (!material) {
        return handleHttpErrorResponse(
          res,
          "Material combustible no encontrado",
          404
        );
      }

      const isAdded = await fireSector.hasMaterial(material);
      if (!isAdded) {
        return handleHttpErrorResponse(
          res,
          "El material combustible no fue agregado al sector de incendio",
          409
        );
      }

      await fireSector.removeMaterial(material);
      fireSector.numberMaterials -= 1;
      fireSector.updatedAt = new Date();
      await fireSector.save();

      await Institution.update(
        { updatedAt: new Date() },
        { where: { id: institutionId } }
      );

      return res.status(200).send({
        message: "Material combustible eliminado correctamente",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },
};

module.exports = FireSectorController;
