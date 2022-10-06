const { getData } = require("../db");

async function downloadService(_req, res) {
  const data = await getData();
  res.json(data);
}

module.exports = downloadService;
