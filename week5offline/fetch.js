function main() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
    const json = await response.json();
    console.log(json.todos.length);
  });
}

//another way for same above
//prefer belowed syntax

async function main() {
  const response = await fetch("https://sum-server.100xdevs.com/todos");
  const json = await response.json();
  console.log(json.todos.length);
}

main();
