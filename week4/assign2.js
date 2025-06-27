const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const FILE_PATH = "todos.json";

// Helper: Read Todos
function readTodos() {
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, "[]");
  }
  const data = fs.readFileSync(FILE_PATH, "utf8");
  return JSON.parse(data);
}

// Helper: Write Todos
function writeTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// Command: Add a Todo
program
  .command("add")
  .description("Add a new todo")
  .argument("<task>", "Task to add")
  .action((task) => {
    const todos = readTodos();
    todos.push({ task, done: false });
    writeTodos(todos);
    console.log(`Added todo: "${task}"`);
  });

// Command: Delete a Todo by index
program
  .command("delete")
  .description("Delete a todo by index (starting from 1)")
  .argument("<index>", "Index to delete")
  .action((index) => {
    const todos = readTodos();
    const idx = parseInt(index) - 1;
    if (idx >= 0 && idx < todos.length) {
      const removed = todos.splice(idx, 1);
      writeTodos(todos);
      console.log(`Deleted todo: "${removed[0].task}"`);
    } else {
      console.log("Invalid index.");
    }
  });

// Command: Mark a Todo as Done
program
  .command("done")
  .description("Mark a todo as done by index (starting from 1)")
  .argument("<index>", "Index to mark done")
  .action((index) => {
    const todos = readTodos();
    const idx = parseInt(index) - 1;
    if (idx >= 0 && idx < todos.length) {
      todos[idx].done = true;
      writeTodos(todos);
      console.log(`Marked as done: "${todos[idx].task}"`);
    } else {
      console.log("Invalid index.");
    }
  });

// Command: List all Todos
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = readTodos();
    if (todos.length === 0) {
      console.log("No todos found.");
    } else {
      console.log("Todo List:");
      todos.forEach((todo, i) => {
        console.log(`${i + 1}. [${todo.done ? "x" : " "}] ${todo.task}`);
      });
    }
  });

program.parse();
