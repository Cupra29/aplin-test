const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multiPartMiddleware = require("./helpers/multipart-middleware");
const downloadService = require("./service/download.service");
const uploadService = require("./service/upload.service");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/api/upload", multiPartMiddleware, uploadService);

app.get("/api/downloadOrders", downloadService);

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
