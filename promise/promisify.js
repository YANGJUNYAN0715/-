const util = require("util");
const fs = require("fs");
let mineReadFile = util.promisify(fs.readFile);
mineReadFile("../面经.md").then((value) => {
  console.log(value.toString());
});
