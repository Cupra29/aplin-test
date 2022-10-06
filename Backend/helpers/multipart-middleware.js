const multipart = require("connect-multiparty");

const multiPartMiddleware = multipart({
  uploadDir: "./uploads",
});

module.exports = multiPartMiddleware;
