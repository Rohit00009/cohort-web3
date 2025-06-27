const express = require("express");
const app = express();

function loggerMiddleware(req, res, next) {
  console.log("Method is " + req.method);
  console.log("Url is " + req.url);
  console.log("Host is " + req.hostname);
  console.log(new Date());

  next();
}

app.use(loggerMiddleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a + b,
  });
});

app.get("/sub", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a - b,
  });
});

app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a * b,
  });
});

app.get("/div", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    answer: a / b,
  });
});

app.listen(3000);
