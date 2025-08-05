// import { WebSocketServer } from "ws";

// const wss = new WebSocketServer({ port: 8080 });

// //event handler
// wss.on("connection", function (socket) {
//   console.log("user connected");
//   setInterval(() => {
//     socket.send("current price of pak:- " + Math.random());
//   }, 2000);

//   socket.on("message", (e) => {
//     console.log(e.toString());
//   });
// });

import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Connected");

  socket.on("message", (e) => {
    if (e.toString() === "ping") {
      socket.send("pong");
    }
  });
});
