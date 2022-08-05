const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const router = require("./apiRouter");

app.use("/api", router);

app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
