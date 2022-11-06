"use strict";

const fs = require("fs");
const path = require("path");
const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");

const generatePDF = async (req, res) => {
  try {
    let path_filePDF = "";
    const { institutionId } = req.params;

    // Get data from idInstitution = {institution and sectors}
    // Transform data in a specific json object
    // Get HTML template
    // Join HTML with data
    // Create a pdf file

    // Change a new path_filePDF
    path_filePDF =
      "http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf";

    // send status and path_filePDF
    res.status(200).send({
      status: "success",
      message: "Archivo PDF creado exitosamente",
      institution: institutionId,
      path_filePDF,
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = {
  generatePDF,
};
