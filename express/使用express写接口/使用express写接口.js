const express = require("express");
const app = express();

<<<<<<< HEAD
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
=======
const cors = require("cors");
app.use(cors());
>>>>>>> 4fc2a3c3674dd24769487ab75aab0d5aadec55e4

const router = require("./apiRouter");

app.use("/api", router);

app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
