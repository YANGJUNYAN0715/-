const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./apiRouter");

app.use("/api", router);

app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
