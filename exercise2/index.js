const http = require("http");
const date = require("./myModule");

const multiples = require("./multipleExportsModule");

console.log("Started");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are : " + date.myDate());
    res.write(
      `<br/>Name: ${multiples.getName()}, Location: ${multiples.getLocation()} , DOB: ${multiples.dateOfBirth()}`
    );
    res.end();
  })
  .listen(9000);
