const fs = require("fs");
fs.writeFile(__dirname + "../Nodejs.md", "你好", function (err) {
  if (err) {
    console.log("文件写入失败" + err.message);
  } else {
    console.log("文件写入成功");
  }
});
