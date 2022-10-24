"use strict";

const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");
const { Institution } = require("../models");

const InstitutionController = {
  /**
   * Obtiene todas las instituciones
   * @param {*} req
   * @param {*} res
   */
  getInstitutions: async (req, res) => {
    try {
      const { user } = req;
      const institutions = await Institution.findAll({
        where: {
          userId: user.id,
        },
      });
      return res.status(200).send({
        data: institutions,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  getInstitution: async (req, res) => {
    try {
      const { id } = req.params;
      let institution = await Institution.findOne({
        where: { id },
        include: ["firesectors"],
      });

      if (!institution) {
        return handleHttpErrorResponse(res, "Institución no encontrado", 404);
      }
      return res.status(200).send({
        data: institution,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  createInstitution: async (req, res) => {
    try {
      const { user } = req;
      req.body.userId = user.id;
      req.body.numberFireSectors = 0;

      const institution = await Institution.create(req.body);
      institution.set("userId", undefined, { strict: false });
      return res.status(201).send({
        message: "Institución creado correctamente",
        data: institution,
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  updateInstitution: async (req, res) => {
    try {
      const { id } = req.params;
      let institution = await Institution.findOne({
        where: { id },
      });
      if (!institution) {
        return handleHttpErrorResponse(res, "Institución no encontrado", 404);
      }

      await institution.update({ ...req.body, updatedAt: new Date() });
      return res.status(200).send({
        message: "Institución actualizado correctamente",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },

  deleteInstitution: async (req, res) => {
    try {
      const { id } = req.params;
      let institutionDeleted = await Institution.destroy({
        where: { id },
      });
      if (institutionDeleted === 0) {
        return handleHttpErrorResponse(res, "Institución no encontrado", 404);
      }

      return res.status(200).send({
        message: "Institución eliminado correctamente",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },
};

module.exports = InstitutionController;
