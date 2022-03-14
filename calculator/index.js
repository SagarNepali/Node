const express = require("express");
const app = express();
const path = require("path");
const port = 9000;
const url = require("url");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/math.js", function (req, res) {
  const result = doOperation(
    req.body.operation,
    parseInt(req.body.num1),
    parseInt(req.body.num2)
  );
  res.send(
    `Num1: ${req.body.num1} <br/> Num2: ${req.body.num2} <hr/> Result: ${result} -> Operation : ${req.body.operation} <br/>
    <a href='./'}>Another calculation</a>`
  );
});

function doOperation(operand, num1, num2) {
  switch (operand) {
    case "add":
      return num1 + num2;
      break;
    case "sub":
      return num1 - num2;
      break;
    case "mul":
      return num1 * num2;
      break;
    case "div":
      return num1 / num2;
      break;
    default:
      console.log("Unknown operand");
      break;
  }
}

app.listen(port, () => console.log(`Started ${port}`));
