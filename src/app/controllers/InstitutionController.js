const { Institution } = require('../models');

const InstitutionController = {
  getInstitutions: async (req, res) => {
    try {
      let institutions = await Institution.findAll(
        {
          raw: true,
          nest: true,
        }
      );
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
        raw: true,
        nest: true,
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
};

module.exports = InstitutionController;
