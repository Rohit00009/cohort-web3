const express = require("express");
const app = express();

//if we want to send json data by post then use extrenal middleware -> express.json()
app.use(express.json());

app.post("/sum", function (req, res) {
  console.log(req.body);
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    answer: a + b,
  });
});

//also we can use bodyParser library which help us to parse any type of data in body to post req
const bodyParser = require("body-parser"); //under the hood of this library we can use express.json() method

app.listen(3000);
