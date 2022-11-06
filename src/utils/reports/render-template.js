const hbs = require("handlebars");
const fs = require("fs");
const path = require("path");

function renderTemplate(templateName, data) {
  const html = fs.readFileSync(
    path.join(__dirname, `../../resources/template/${templateName}.hbs`),
    "utf8"
  );

  const template = hbs.compile(html);
  const renderedHTML = template(data);
  return renderedHTML;
}

module.exports = renderTemplate;
