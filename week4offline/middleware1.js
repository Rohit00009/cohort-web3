const express = require("express");
const app = express();

// function isOldEnough(age) {
//   if (age > 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

// app.get("/ride-1", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "You successfully riden the ride 1.",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Your age is not enough!",
//     });
//   }
// });

// app.get("/ride-2", function (req, res) {
//   if (isOldEnough(req.query.age)) {
//     res.json({
//       msg: "You successfully riden the ride 2.",
//     });
//   } else {
//     res.status(411).json({
//       msg: "Your age is not enough!",
//     });
//   }
// });

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Your age is not enough!",
    });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride-1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You ridden ride-1",
  });
});
app.get("/ride-2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You ridden ride-2",
  });
});

app.listen(3000);
