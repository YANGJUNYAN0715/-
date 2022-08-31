const express = require("express");
const app = express();
const customBodyParser = require("./custom-body-parser");

app.use(customBodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});
app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
