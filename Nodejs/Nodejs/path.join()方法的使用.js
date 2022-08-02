const path = require("path");
const fs = require("fs");
fs.readFile(path.join(__dirname, "/abc.txt"), "utf8", function (err, data) {
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }
  console.log("文件读取成功，内容是" + data);
});
