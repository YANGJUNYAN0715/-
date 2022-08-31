const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  //   res.send("ok");
  res.send(req.body);
});
app.post("/book", (req, res) => {
  console.log(req.body);
  //   res.send("ok");
  res.send(req.body);
});
app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
