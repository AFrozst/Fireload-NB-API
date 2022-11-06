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
    let exampleFilename = "example.pdf";
    const filename = getFilename(institutionId, "pdf");

    // Get data from idInstitution = {institution and sectors}
    // let dataInstitution = await Institution.findOne({
    //   where: { id: institutionId },
    //   attributes: { exclude: ["createdAt", "updatedAt", "userId", "id"] },
    //   include: [
    //     {
    //       model: FireSector,
    //       as: "firesectors",
    //       attributes: {
    //         exclude: ["createdAt", "updatedAt", "institutionId", "id"],
    //       },
    //       include: [
    //         {
    //           model: CombustibleMaterial,
    //           as: "materials",
    //           through: {
    //             model: Sector_Material,
    //             attributes: { exclude: ["createdAt", "updatedAt"] },
    //           },
    //         },
    //       ],
    //     },
    //   ],
    //   order: [
    //     [
    //       {
    //         model: FireSector,
    //         as: "firesectors",
    //       },
    //       "id",
    //       "ASC",
    //     ],
    //   ],
    // });

    // Map data
    ////let valuesData = dataInstitution.get({ plain: true });
    ////let dataMap = mapperData(valuesData);
    //console.log(dataMap);

    // Get HTML template and create with Data
    const htmlContent = renderTemplate("Report", {
      title: "Fireload NB Report",
    });
    const filenamePDF = await createPDF(htmlContent, filename);
    path_filePDF = `${PUBLIC_URL}/pdfs/${filenamePDF}`;

    const data = {
      status: "success",
      message: "Archivo PDF creado exitosamente",
      path_filePDF,
      url: `${PUBLIC_URL}/pdfs/${exampleFilename}`,
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
