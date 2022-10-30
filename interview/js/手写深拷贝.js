const { stringify } = require("nodemon/lib/utils");

const obj = {
  name: "af",
  address: {
    city: "北京",
    a: ["1"],
  },
};
function deepClone(obj) {
  if (obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
let temp = deepClone(obj);
console.log(obj);
console.log(temp);
temp.address.city = "上海";
temp.address.a = 1;
console.log(obj);
console.log(temp);

let temp2 = JSON.parse(JSON.stringify(obj));
console.log(temp2);
temp2.address.city = "西安";
console.log(temp2);
console.log(obj);
