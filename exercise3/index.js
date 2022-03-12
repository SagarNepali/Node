const http = require("http");
const url = require("url");

console.log("Started");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    const params = url.parse(req.url, true, true).query;

    res.write(
      `<br/>Params sent in url  id: ${params.id} and data: ${params.data}`
    );

    res.end();
  })
  .listen(9000);
