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
      let institutions = await Institution.findAll({
        raw: true,
        nest: true,
      });
      return res.status(200).send({
        user,
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
        return handleHttpErrorResponse(res, "Institution not found", 404);
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
      req.body.numberFireSectors = 0;
      let newInstitution = await Institution.create(req.body);
      return res.status(201).send({
        message: "Institution created successfully",
        data: newInstitution,
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
        raw: true,
        nest: true,
      });
      if (!institution) {
        return handleHttpErrorResponse(res, "Institution not found", 404);
      }

      await Institution.update(req.body, {
        where: { id },
      });
      return res.status(200).send({
        message: "Institution updated successfully",
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
        return handleHttpErrorResponse(res, "Institution not found", 404);
      }

      return res.status(200).send({
        message: "Institution deleted successfully",
      });
    } catch (error) {
      handleHttpError(res, error.message);
    }
  },
};

module.exports = InstitutionController;
