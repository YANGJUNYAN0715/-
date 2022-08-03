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
