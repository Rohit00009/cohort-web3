// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

//1) callback hell ->means nested callbacks
// getData(1, () => {
//   getData(2, () =>{
//     getData(3);
//   });
// });

//2) PROMISE create also resolve&reject
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello world");
//       resolve("success");
//       // reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//3) .then(),.catch()
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("network error")
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

//4) Prmoise Chain (imp)
// function asynccFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// asynccFunc1().then((res) => {
//   console.log("fetchig data2....");
//   asyncFunc2().then((res) => {});
// });
//in simpler way

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 3000);
//   });
// }

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     return getData(4);
//   });


//5) best concept for promise -> Async-Await
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1", dataId);
      resolve("success");
    }, 3000);
  });
}
async function getAllData() {
  console.log("getting data1.....");
  await getData(1);
  console.log("getting data2.....");
  await getData(2);
  console.log("getting data3.....");
  await getData(3);
  console.log("getting data4.....");
  await getData(4);
}
//use IIFE(immediately inovoked function expression) not require to call function       
(async function() {
  console.log("getting data1.....");
  await getData(1);
  console.log("getting data2.....");
  await getData(2);
  console.log("getting data3.....");
  await getData(3);
  console.log("getting data4.....");
  await getData(4);
})();