let arr = [1, 2123, 4, 23, 52342, 3454];

function sortRandom(arr) {
  let res = [];
  while (arr.length !== 0) {
    let index = Math.floor(Math.random() * arr.length);
    if (index !== res.length) {
      res.push(arr[index]);
    } else {
      continue;
    }
    arr.splice(index, 1);
  }
  return res;
}
console.log(sortRandom(arr));
