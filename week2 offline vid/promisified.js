// //  promisified version of
// // 1)setTimeout
// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }

// setTimeoutPromisified(3000).then(function () {
//   console.log("3 seconds has passed");
// });

// // 2) readFile
// const fs = require("fs");
// function readFileAsync() {
//   return new Promise(function (resolve, reject) {
//     fs.readFile("b.txt", "utf-8", function (err, data) {
//       if (err) {
//         reject(err.syscall);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// readFileAsync()
//   .then(function (x) {
//     console.log("data is " + x);
//   })
//   .catch(function (x) {
//     console.log("error is " + x);
//   });

// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }

// setTimeoutPromisified(3000).then(function () {
//   console.log("3sec are done");
// // });

// function setTimeoutPromisified(duration) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, duration);
//   });
// }
// setTimeoutPromisified(3000).then(function () {
//   console.log("3sec are done");
// });

function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}
// setTimeoutPromisified(2000).then(function () {
//   console.log("2sec are done");
// });

(async function () {
  await setTimeoutPromisified(3000);
  console.log("hi");
  await setTimeoutPromisified(2000);
  console.log("hello");
})();

