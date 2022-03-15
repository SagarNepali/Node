const express = require("express");
const path = require("path");
const app = express();
const homeRoutes = require("./routes/home/homeRoute");
const accountRoutes = require("./routes/account/accountRoute");

const PORT = 9000;

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/", homeRoutes);
app.use("/account", accountRoutes);
app.listen(PORT, () => {
  console.log("Started @ 9000");
});
