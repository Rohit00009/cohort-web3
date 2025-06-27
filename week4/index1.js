// const fs = require("fs");
// const { Command } = require("commander");
// const program = new Command();

// program
//   .name("counter")
//   .description("CLI to do file based tasks")
//   .version("0.8.0");

// program
//   .command("count")
//   .description("count the number of words in a file")
//   .argument("<file>", "file to count")
//   .action((file) => {
//     fs.readFile(file, "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let words = 0;
//         for (let i = 0; i < data.length; i++) {
//           if (data[i] === " ") {
//             words++;
//           }
//         }
//         console.log(`There are ${words + 1} words in ${file}`);
//       }
//     });
//   });
// program.parse();

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based task")
  .version("0.1.0");

program
  .command("count_words")
  .description("countes_words")
  .argument("</file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") {
            words++;
          }
        }
        console.log(`There are ${words + 1} words in file ${file}`);
      }
    });
  });

program
  .command("count_sentences")
  .description("countes_words")
  .argument("</file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let lines = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === "\n") {
            lines++;
          }
        }
        console.log(`There are ${lines + 1} lines in file ${file}`);
      }
    });
  });

program.parse();
