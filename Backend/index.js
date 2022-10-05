const express = require("express");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");
const cors = require("cors");
const XLSX = require("xlsx");
const { createData, getData } = require("./db/db");

const PORT = 3000;
const app = express();

app.use(cors());
const multiPartMiddleware = multipart({
  uploadDir: "./uploads",
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/api/upload", multiPartMiddleware, (req, res) => {
  const ruta = req.files.uploads[0].path;
  const workbook = XLSX.readFile(ruta);
  const workbookSheets = workbook.SheetNames;
  const sheet = workbookSheets[0];
  const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

  for (const item of dataExcel) {
    createData(item);
  }

  res.json({
    message: "Document Uploaded",
  });
});

app.get("/api/downloadOrders", async (req, res) => {
  const data = await getData();
  res.json(data);
});

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
