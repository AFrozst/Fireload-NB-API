const puppeteer = require("puppeteer");
const fs = require("fs");

const getFilename = (idInstitution, ext) => {
  const filename = `report-fireloadnb-${idInstitution}-doc.${ext}`;
  return filename;
};

const getPathStorage = () => {
  const pathStorage = `${__dirname}/../../storage/pdfs`;
  return pathStorage;
};

const createPDF = async (templateHTML, filename) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(templateHTML);
  await page.emulateMediaType("print");
  await page.pdf({
    path: `${getPathStorage()}/${filename}`,
    format: "A4",
    printBackground: true,
    margin: {
      top: "2cm",
      right: "3cm",
      bottom: "2cm",
      left: "3cm",
    },
  });

  await browser.close();
  return filename;
};

module.exports = {
  getFilename,
  getPathStorage,
  createPDF,
};
