const express = require("express");
const app = express();

const mw1 = (req, res, next) => {
  console.log("调用了中间件");
  next();
};

app.get("/user", mw1, (req, res) => {
  res.send("user page");
});

app.get("/", (req, res) => {
  res.send("user page2");
});

app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
