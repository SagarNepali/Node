const express = require("express");
const app = express();
const path = require("path");

const port = 9900;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/simpleAdder.html"));
});

app.listen(port, () => {
  console.log(`Web Server started @${port} `);
});
