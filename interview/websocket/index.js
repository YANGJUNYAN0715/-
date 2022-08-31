// websocket是HTML5新增的协议，诞生目的就是在浏览器和服务器之间建立一个不受限的双向通信的用到
// http协议是一个请求协议，必须由游览器发给服务器，服务器才能响应
// websocket协议是一个无限大的数据流，可以由游览器发给服务器，服务器可以响应
// 双向通信的意思是，浏览器可以向服务器发送请求，服务器也可以向浏览器发送响应

const Websocket = require("ws");
const wss = new Websocket.Server({ port: 5000 });
wss.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log("客户端发来的消息是:" + message);
    ws.send("hi，我接收到了消息，我是服务器");
  });
});
