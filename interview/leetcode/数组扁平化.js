var arr = [1, 5, [2, [[32, 1]], [3, 4]]];
var arr2 = [1, 5, [2, [[32, 1]], [3, 4]]];
Array.prototype.flatten = function () {
  const result = this.map((item) => {
    if (Array.isArray(item)) {
      return item.flatten();
    }
    return item;
  });
  return [].concat(...result);
};
Array.prototype.flatten2 = function () {
  let result = this;
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
};

Array.prototype.unique = function () {
  return [...new Set(this)];
};

const sortFn = (a, b) => a - b;

console.log(
  arr
    .flatten()
    .unique()
    .sort((a, b) => a - b)
);
console.log(
  arr
    .flatten2()
    .unique()
    .sort((a, b) => a - b)
);
