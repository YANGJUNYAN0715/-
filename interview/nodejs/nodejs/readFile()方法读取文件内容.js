const fs = require("fs");
fs.readFile(__dirname + "/../Nodejs.md", "utf8", function (err, data) {
  if (err) {
    return console.log("文件读取失败！" + err.message);
  }
  console.log("文件读取成功，内容是" + data);
});
