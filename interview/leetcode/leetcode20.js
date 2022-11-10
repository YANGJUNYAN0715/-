var isValid = function (s) {
  const n = s.length;
  if (n % 2 == 1) {
    return false;
  }
  let temp = [];
  let map = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  for (ch of s) {
    if (map.get(ch)) {
      if (!temp.length || temp[temp.length - 1] != map.get(ch)) {
        return false;
      }
      temp.pop();
    } else {
      temp.push(ch);
    }
  }
  return !temp.length;
};
s1 = "()";
s2 = "()[]{}";
s3 = "(]";
console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
