const express = require("express");
const app = express();

const mw = function (req, res, next) {
  console.log("这是最简单的中间件函数");
  const time = Date.now();
  req.startTime = time;
  next();
};

app.use(mw);

app.get("/", (req, res) => {
  res.send("hello page." + req.startTime);
});
app.get("/user", (req, res) => {
  res.send("use page." + req.startTime);
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
