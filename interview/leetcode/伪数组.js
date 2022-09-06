/*
伪数组，有数组三要素（包括下标，元素，长度），但是不能使用数组的方法
伪数组，本质还是对象
*/
let obj = {
  0: 20,
  1: 30,
  2: 50,
  length: 3,
};
// ES6
console.log(obj);
const obj2 = Array.from(obj);
console.log(obj2);

// 函数名.apply(修改的this,数组/伪数组)
const obj3 = [];
obj3.push.apply(obj3, obj);
console.log(obj3);
