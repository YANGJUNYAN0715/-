const express = require("express");
const app = express();
const qs = require("querystring");

app.use((req, res, next) => {
  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });
  req.on("end", () => {
    const body = qs.parse(str);
    console.log(body);
    req.body = body;
    next();
  });
});
app.post("/user", (req, res) => {
  res.send(req.body);
});
app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
