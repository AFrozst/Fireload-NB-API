"use strict";

const { Institution } = require("../models");

const InstitutionController = {
  getInstitutions: async (req, res) => {
    try {
      let institutions = await Institution.findAll({
        raw: true,
        nest: true,
      });
      return res.status(200).send({
        data: institutions,
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
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
        return res.status(404).send({
          errorMessage: "Institution not found",
        });
      }
      return res.status(200).send({
        data: institution,
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
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
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
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
        return res.status(404).send({
          errorMessage: "Institution not found",
        });
      }
      await Institution.update(req.body, {
        where: { id },
      });
      return res.status(200).send({
        message: "Institution updated successfully",
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
    }
  },

  deleteInstitution: async (req, res) => {
    try {
      const { id } = req.params;
      let institutionDeleted = await Institution.destroy({
        where: { id },
      });
      if (institutionDeleted === 0) {
        return res.status(404).send({
          errorMessage: "Institution not found",
        });
      }
      return res.status(200).send({
        message: "Institution deleted successfully",
      });
    } catch (error) {
      const status = error.status || 500;
      const errorMessage = error.message || "Internal Server Error";
      return res.status(status).send({ errorMessage });
    }
  },
};

module.exports = InstitutionController;
