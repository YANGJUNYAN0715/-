function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
let a = [];
console.log(myInstanceof(a, Array));
console.log(myInstanceof(a, Date));
console.log(myInstanceof(a, Object));
console.log(isNaN("1"));
console.log(isNaN(+0));
console.log(isNaN(-0));
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));
