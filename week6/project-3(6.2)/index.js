const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const JWT_SECRET = "randompeople";

app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + " request came");
  next();
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  res.json({
    msg: "Signed Up Successfully!",
  });
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(function (users) {
    if (users.username == username && users.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.send({
      token,
    });
    console.log(users);
  } else {
    res.status(404).send({
      msg: "Inavalid username or password",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({
      msg: "Token missing",
    });
  }
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.username;
  if (username) {
    req.username = username; //pass the data to next function
    next();
  } else {
    res.json({
      msg: "You are not logged in!",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  //   const token = req.headers.token;
  //   const decodedInformation = jwt.verify(token, JWT_SECRET);
  //   const username = decodedInformation.username;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == req.username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  }
  //   else {
  //     res.json({
  //       msg: "Token invalid!",
  //     });
  //   }
});

app.listen(3000);
