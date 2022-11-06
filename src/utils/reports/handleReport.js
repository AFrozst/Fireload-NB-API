const getFilename = (idInstitution, ext) => {
  const filename = `report-fireloadnb-${idInstitution}-doc.${ext}`;
  return filename;
};

const getPathStorage = () => {
  const pathStorage = `${__dirname}/../../storage/pdfs`;
  return pathStorage;
};

const generatePDF = async (templateHTML, id, dataTable) => {
  // const pathStorage = getPathStorage();
  // const filename = getFilename(data.idInstitution, "pdf");
  // const pathFile = `${pathStorage}/${filename}`;
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.setContent(templateHTML);
  // await page.emulateMediaType("screen");
  // await page.pdf({
  //   path: pathFile,
  //   format: "A4",
  //   printBackground: true,
  // });
  // await browser.close();
  // return pathFile;
  return "fireload.pdf";
};

module.exports = {
  getFilename,
  getPathStorage,
  generatePDF,
};
