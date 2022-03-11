/**
 * @author SagarNepali
 * @since 2022-03-11
 *
 */

console.log("====Node server listening @ port 9000");

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    const page = `<!doctype html>
    <html lang="en">
    <head>
        <title>Node</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
    `;

    res.end(page);
  })
  .listen(9000);
