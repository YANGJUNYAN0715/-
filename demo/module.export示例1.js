module.exports.username = "zs";
module.exports.age = 18;
exports = {
  username: "asd",
  sayHi() {
    console.log("hi");
  },
  age: 20,
};
console.log(exports === module.exports);

const moment = require("moment");
const dt = moment().format("YYYY-MM-DD HH:mm:ss");
const dt2 = moment().format("YYYY-MM-DD");
console.log(dt2);
console.log(dt);
