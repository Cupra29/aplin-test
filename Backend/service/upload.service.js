const sheetToJson = require("../helpers/sheet-to-json");
const { createData } = require("../db");

function uploadService(req, res) {
  const ruta = req.files.uploads[0].path;
  const dataExcel = sheetToJson(ruta);

  for (const item of dataExcel) {
    createData(item);
  }

  res.json({
    message: "Document Uploaded",
  });
}

module.exports = uploadService;
