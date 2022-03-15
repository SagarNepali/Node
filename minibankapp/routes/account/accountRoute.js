"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();

accountRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../views", "account.html"));
});

module.exports = accountRouter;
