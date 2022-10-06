const XLSX = require("xlsx");

function sheetToJson(ruta) {
  const workbook = XLSX.readFile(ruta);
  const workbookSheets = workbook.SheetNames;
  const sheet = workbookSheets[0];
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
}

module.exports = sheetToJson;
