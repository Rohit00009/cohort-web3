// const fs = require("fs");
// const { Command } = require("commander");
// const program = new Command();

// program
//   .name("counter")
//   .description("CLI to do file based tasks")
//   .version("0.8.0");

// program
//   .command("count")
//   .description("Count the number of lines in a file")
//   .argument("<file>", "file to count")
//   .action((file) => {
//     fs.readFile(file, "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split("\n").length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });
// program.parse();

const fs = require("fs");

function main(fileName) {
  //   console.log(process.argv);
  fs.readFile(fileName, "utf-8", function (err, data) {
    // if (err) {
    //   console.error("Error reading file:", err.message);
    //   return;
    // }
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") {
        total++;
      }
    }
    console.log(total + 1);
  });
}

main(process.argv[2]);
