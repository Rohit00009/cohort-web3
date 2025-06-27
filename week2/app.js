const fs = require("fs");
//synchronous
const content = fs.readFileSync("b.txt", "utf-8");
console.log(content);
const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

//ashynchronous
function print(err, data) {
  console.log(data);
}
fs.readFileSync("a.txt", "utf-8", print);
fs.readFileSync("b.txt", "utf-8", print);
//definition of readFile
// function readFile(filepath, encoding, op) {
//   //read file
//   op("error!", "hi there!");
// }
