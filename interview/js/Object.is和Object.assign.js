let obj1 = { a: "yjy", b: { c: 20 } };
let obj2 = Object.assign({}, obj1);
console.log(obj1);
console.log(obj2);
// 对于基本数据类型是浅拷贝
obj2.a = "nihao";
console.log(obj1);
console.log(obj2);
obj2.b.c = 50;
// 对于引用数据类型仍然是深拷贝
console.log(obj1);
console.log(obj2);

console.log(Object.is([], []));
console.log(Object.is(NaN, 0 / 0));
console.log(Object.is(NaN, Number.NaN));

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true
Object.is(0n, -0n); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
