// external module
const express = require("express");

// local module
const userRequestHandler = require("./user");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Welcome to first middleware", req.url, req.method);
  //res.send("<h1> Welcome to First middleware</h1>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<h1> Welcome to Complete Coding </h1>");
});

app.use("/", (req, res, next) => {
  console.log("Welcome to another middleware", req.url, req.method);
  res.send("<h1> Welcome to another middleware </h1>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server runing at http://localhost:${PORT}`);
});
