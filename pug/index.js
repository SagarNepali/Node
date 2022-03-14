const express = require("express");

const app = express();

app.set("view engine", "jade");

app.get("/", (req, res) => {
  res.render("welcome.pug");
});

app.listen(9000, function () {
  console.log("SErver started at 9000");
});
