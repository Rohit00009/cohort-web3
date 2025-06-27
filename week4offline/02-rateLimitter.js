const express = require("express");
const app = express();

let numberOfRequestsForUser = {};
let resetInterval;

app.use(function (req, res, next) {
  //   const userId = req.header("user-id");
  const userId = req.header("user-id") || req.query.userid;

  if (!userId) {
    return res.status(400).json({
      error: "user-id is required",
    });
  }

  const currentTime = Math.floor(Date.now() / 1000);

  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = {
      count: 0,
      lastRequestTime: currentTime,
    };
  }

  const userData = numberOfRequestsForUser[userId];
  if (currentTime === userData.lastRequestTime) {
    userData.count += 1;
  } else {
    userData.count = 1;
    userData.lastRequestTime = currentTime;
  }
  if (userData.count > 5) {
    return res.status(404).json({ error: "Too many requests" });
  }
  next();
});

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.get("/user", function (req, res) {
  res.status(200).json({
    name: "ro",
  });
});

app.post("/user", function (req, res) {
  res.status(200).json({
    msg: "dummied user is formed!",
  });
});

app.listen(3000);
