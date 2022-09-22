const express = require("express");
const path = require("path");

var ejs = require("ejs");
var config = require("./config/default");

const app = express();

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/data"));

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "content-type, Origin, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require("./routers/index")(app);

app.listen(config.port, () => {
  console.log(`启动了端口${config.port}`);
});
