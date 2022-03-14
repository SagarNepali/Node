/**
 * @author Sagar Nepali
 * @since 2022-03-13
 * code repo @ https://github.com/SagarNepali/Node/tree/main/calculator
 *
 */

const express = require("express");
const app = express();
const path = require("path");
const port = 9000;
const url = require("url");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/math.js", function (req, res) {
  const result = doOperation(
    req.body.operation,
    parseInt(req.body.num1),
    parseInt(req.body.num2)
  );

  res.redirect(
    `/result?number1=${req.body.num1}&number2=${req.body.num2}&operation=${req.body.operation}&result=${result} `
  );
});

app.get("/result", (req, res) => {
  res.send(
    `Num1: ${req.query.number1} 
    <br/> Num2: ${req.query.number2} 
    <hr/> Result: ${req.query.result} -> Operation : ${req.query.operation} 
    <br/>
    <a href='./'}>Another calculation</a>`
  );
  res.end();
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
