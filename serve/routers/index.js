const controller = require("../controller/dbServer");
module.exports = function (app) {
  app.get("/test", (req, res) => {
    res.type("html");
    res.render("test");
  });
};
