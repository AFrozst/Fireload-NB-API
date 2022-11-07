"use strict";
const fs = require("fs");
const path = require("path");
const {
  Institution,
  FireSector,
  CombustibleMaterial,
  Sector_Material,
} = require("../models");
const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");
const {
  getFilename,
  getPathStorage,
  createPDF,
} = require("../../utils/reports/handleReport");
const { mapperData } = require("../../utils/reports/mapperDataReport");
const renderTemplate = require("../../utils/reports/render-template");
const PUBLIC_URL = process.env.PUBLIC_URL;

const generatePDF = async (req, res) => {
  try {
    let path_filePDF = "";
    const { institutionId } = req.params;
    const filename = getFilename(institutionId, "pdf");
    let exampleFilename = "example.pdf";

    //TODO Get data from idInstitution = {institution and sectors}
    let dataInstitution = await Institution.findOne({
      where: { id: institutionId },
      attributes: { exclude: ["createdAt", "updatedAt", "userId", "id"] },
      include: [
        {
          model: FireSector,
          as: "firesectors",
          attributes: {
            exclude: ["createdAt", "updatedAt", "institutionId", "id"],
          },
          include: [
            {
              model: CombustibleMaterial,
              as: "materials",
              through: {
                model: Sector_Material,
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            },
          ],
        },
      ],
      order: [
        [
          {
            model: FireSector,
            as: "firesectors",
          },
          "id",
          "ASC",
        ],
      ],
    });

    if (!dataInstitution) {
      return handleHttpErrorResponse(res, "Institución no encontrado", 404);
    }

    //TODO Map data to render template
    let valuesData = dataInstitution.get({ plain: true });
    let dataMap = mapperData(valuesData);

    //TODO  Get HTML template and create with Data
    const htmlContent = renderTemplate("Report", dataMap);
    const filenamePDF = await createPDF(htmlContent, filename);
    path_filePDF = `${PUBLIC_URL}/pdfs/${filenamePDF}`;

    const data = {
      status: "success",
      message: "Archivo PDF creado exitosamente",
      path_filePDF,
      url_filePDF: `/pdfs/${filenamePDF}`,
      url_example: `/pdfs/${exampleFilename}`,
    };

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
