var countBits = function (n) {
  function count(number) {
    var count = 0;
    while (number > 0) {
      number = number & (number - 1);
      count++;
    }
    return count;
  }
  var res = [];
  for (var i = 0; i <= n; i++) {
    res.push(count(i));
  }
  return res;
};
n1 = 5;
console.log(countBits(n1));
