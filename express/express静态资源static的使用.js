const ex = require("express");
const app = ex();

app.use("/leetcode", ex.static("../leetcode"));

app.listen(80, () => {
  console.log("express server is running at http://127.0.0.1:80");
});
