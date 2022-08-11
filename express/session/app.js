const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(80, (req, res) => {
  console.log("http://127.0.0.1");
});
