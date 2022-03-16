const express = require("express");
const path = require("path");
const app = express();
const homeRoutes = require("./routes/home/homeRoute");
const accountRoutes = require("./routes/account/accountRoute");
const mongoose = require("mongoose");

const PORT = 9000;

app.set("view engine", "jade");
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/", homeRoutes);
app.use("/account", accountRoutes);
app.listen(PORT, () => {
  console.log("Started @ 9000");
});
