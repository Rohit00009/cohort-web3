const express = require("express");
const app = express();

let requestCount = 0;
let errorCount = 0;

app.use(function (req, res, next) {
  requestCount = requestCount + 1;
  next();
});

app.get("/user", function (req, res) {
  throw new Error("some error");
  res.status(200).json({
    name: "ro",
  });
});

app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "created dummy user!",
  });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({
    errorCount,
  });
});

//error handling middleware
app.use(function (err, req, res, next) {
  res.status(404).send({});
  errorCount = errorCount + 1;
});

app.listen(3000);
