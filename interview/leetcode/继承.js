function A(name) {
  this.name = name;
  this.arr = [1];
  this.say = function () {
    console.log("hello");
  };
}

let a = new A();
console.log(a.__proto__ == A.prototype);

// 原型继承
function Parent(name) {
  this.name = name;
  this.arr = [1];
}
Parent.prototype.say = function () {
  console.log("hello");
};
function Child(like) {
  this.like = like;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;
