const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
//cors for which different hosts for backend and frontend for whom should be allowed
app.use(cors());

//if we want frontend and backend both on same host then comment cors and do followed
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    answer: a + b,
  });
});

// app.get("/sub", function (req, res) {});

// app.get("/mul", function (req, res) {});

// app.get("/div", function (req, res) {});

app.listen(3000);
