let abc = {
  name: "asd",
  age: 112,
  nihao: function () {
    console.log("你好");
  },
};
function clone(obj) {
  let res;
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    res = [];
  } else {
    res = {};
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}
let temp = clone(abc);
console.log(temp);
temp.name = "adsas";
console.log(temp);
console.log(abc);
// 这居然还是深拷贝！！不是浅拷贝哈哈哈哈，标题瞎写的
