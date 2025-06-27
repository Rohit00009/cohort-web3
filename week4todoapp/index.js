const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//step3
let todos = {};
let todoId = 1;

//step4
app.post("/todo", (req, res) => {
  const { userId, task } = req.body;
  if (!userId || !task) {
    return res.status(400).json({ error: "userId and task are required" });
  }

  const newTodo = { id: todoId++, task };

  if (!todos[userId]) {
    todos[userId] = [];
  }

  todos[userId].push(newTodo);
  res.status(201).json({ message: "Todo added", todo: newTodo });
});

//step5
app.delete("/todo/:id", (req, res) => {
  const { userId } = req.body;
  const todoToDelete = parseInt(req.params.id);

  if (!userId) return res.status(400).json({ error: "userId is required" });

  if (!todos[userId]) return res.status(404).json({ error: "User not found" });

  const index = todos[userId].findIndex((todo) => todo.id === todoToDelete);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleted = todos[userId].splice(index, 1);
  res.json({ message: "Todo deleted", deleted: deleted[0] });
});

//step6 add route
app.get("/todos", (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ error: "userId is required" });
  res.json({ todos: todos[userId] || [] });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
