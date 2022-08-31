const ex = require("express");
const app = ex();
app.get("/user", (req, res) => {
  res.send({ name: 30, age: 20 });
});
app.post("/user", (req, res) => {
  res.send("请求成功");
});
app.get("/", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.get("/user/:id/:name", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});
app.listen(80, () => {
  console.log("express server is running at http://127.0.0.1:80");
});
