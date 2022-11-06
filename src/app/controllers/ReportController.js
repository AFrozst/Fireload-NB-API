"use strict";

const fs = require("fs");
const path = require("path");
const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");
const {
  getFilename,
  getPathStorage,
} = require("../../utils/reports/handleReport");
const PUBLIC_URL = process.env.PUBLIC_URL;

const generatePDF = async (req, res) => {
  try {
    let path_filePDF = "";
    const { institutionId } = req.params;
    let exampleFilename = "example.pdf";

    const parhStorage = getPathStorage();
    const filename = getFilename(institutionId, "pdf");

    // Get data from idInstitution = {institution and sectors}
    // Transform data in a specific json object
    // Get HTML template
    // Join HTML with data
    // Create a pdf file

    // Change a new path_filePDF
    path_filePDF = `${PUBLIC_URL}/pdfs/${filename}`;

    const data = {
      status: "success",
      message: "Archivo PDF creado exitosamente",
      parhStorage,
      path_filePDF,
      url: `${PUBLIC_URL}/pdfs/${exampleFilename}`,
    };

    // send status and path_filePDF
    return res.status(200).send({
      data,
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = {
  generatePDF,
};
