const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "random";
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://admin:Rohit1234@cluster0.cm424xg.mongodb.net/todo-app"
);
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  //zod step1:- define schema
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    password: z
      .string()
      .min(3)
      .max(30)
      .toUpperCase(1)
      .toLowerCase(1)
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character",
      }),
    name: z.string().min(3).max(100),
  });
  
  //step2 :- parsing the data
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataWithSuccess.success) {
    res.json({
      msg: "Invalid Format!",
      error: parsedDataWithSuccess.error,
    });
  }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({
      msg: "DUplicate user!",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      msg: "Signed up successfully!",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.findOne({
    email: email,
    // password: password,
  });
  if (!user) {
    res.status(404).json({
      msg: "user not found!",
    });
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(404).json({
      msg: "Invalid Password!",
    });
  }
});

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  TodoModel.create({
    title,
    userId,
  });

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.findOne({
    userId: userId,
  });

  res.json({
    userId: userId,
  });
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedInfo = jwt.verify(token, JWT_SECRET);

  if (decodedInfo) {
    req.userId = decodedInfo.id;
    next();
  } else {
    res.status(404).json({
      msg: "Invalid Credentials",
    });
  }
}

app.listen(3000);
