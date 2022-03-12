const url = require("url");
const http = require("http");
const addmod = require("./addmod");
const fs = require("fs");

console.log("Started");
http
  .createServer((req, res) => {
    const params = url.parse(req.url, true);
    const fileName = "." + params.pathname;

    if (params.pathname === "/add.js") addmod.add(req, res, params.query);
    else
      fs.readFile(fileName, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not found");
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
      });
  })
  .listen(9000);
