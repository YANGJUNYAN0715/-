var reverseLeftWords = function (s, n) {
  // let s1 = s.substring(0, n);
  // let s2 = s.substring(n, s.length);
  // return s2 + s1;
  res = " ";
  for (let i = n; i < s.length + n; i++) {
    res += s.slice[(i % s, i % (s + 1))];
  }
  return res;
};
(s = "abcdefg"), (k = 2);
(s1 = "lrloseumgh"), (k1 = 6);
console.log(reverseLeftWords(s, k));
console.log(reverseLeftWords(s1, k1));
