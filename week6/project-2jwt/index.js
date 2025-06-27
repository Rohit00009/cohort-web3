const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randompeople"; //global variable
const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "You are signed up!",
  });
});

app.post("/signin", function (req, res) {
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
    // const token = generateToken();
    // foundUser.token = token;

    //instead of above we can use jwt as follows

    const token = jwt.sign(
      //this token is stateless token itself sotres its state
      {
        username: username, //arg 1 is what we want to encrypt
      },
      JWT_SECRET //arg 2 is what is our secret to sign a specific token
    ); //convert their username over to a jwt
    res.send({
      token,
    });
    console.log(users);
  } else {
    res.status(404).send({
      message: "Inavlid username or password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET); //{username: "rooooo"}
  const username = decodedInformation.username;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      msg: "Token invalid!",
    });
  }
});

app.listen(3000);
