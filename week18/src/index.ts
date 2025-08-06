import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const client = new PrismaClient();

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({ users });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const user = await client.user.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      todos: true,
      username: true,
      passsword: true,
    },
  });
  res.json({ user });
});

// async function createUser() {
//   await client.user.create({
//     data: {
//       username: "ro",
//       passsword: "1234",
//       age: 20,
//     },
//   });
//   const user = await client.user.findFirst({
//     where: {
//       id: 1,
//     },
//     include: {
//       todos: true,
//     },
//   });
//   console.log(user);
// }

// createUser();

app.listen(3000);
