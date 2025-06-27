const express = require("express");
const app = express();

app.use(express.json());

const user = [];

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    // use a simple function here
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //   if (username.length < 5) {
  //     res.json({
  //       msg: "your username is too short",
  //     });
  //     return;
  //   }

  user.push({
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

  //   let foundUser = null;
  //   for (let i = 0; i < user.length; i++) {
  //     if (user[i].username == username && user[i].password == password) {
  //       foundUser = user[i];
  //     }
  //   }
  const foundUser = user.find(function (user) {
    if (user.username == username && user.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.send({
      token,
    });
    console.log(user);
  } else {
    res.status(404).send({
      message: "Inavlid username or password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  let foundUser = null;

  for (let i = 0; i < user.length; i++) {
    if (user[i].token == token) {
      foundUser = user[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "token invalid",
    });
  }
});

//aslo we can write above function as follows

app.listen(3000);


