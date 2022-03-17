const express = require("express");
const app = express();
const registrationRoute = express.Router();
const path = require("path");
const dataStore = require("../../../datastore/datastore");

registrationRoute.get("/", (req, res) => {
  res.render(
    path.join(
      __dirname,
      "../../../views/public/registration",
      "registration.pug"
    ),
    { list: dataStore.getData() }
  );
});

registrationRoute.post("/add", (req, res, next) => {
  let data = {
    studentId: req.body.studentId,
    fullName: req.body.fullName,
    levelOfStudy: req.body.levelOfStudy,
  };
  dataStore.addData(data);
  res.redirect("back");
});

module.exports = registrationRoute;
