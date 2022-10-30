function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
a = [1, [1, 2, 3], [1, 2, [2, 4]]];
console.log(flatten(a));
console.log(a.flat(Infinity));
