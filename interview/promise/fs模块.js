const fs = require("fs");

// fs.readFile("../面经.md", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
const p = new Promise((resolve, reject) => {
  fs.readFile("../面经.md", (err, data) => {
    if (err) {
      console.log(err);
      reject(err);
    }
    resolve(data);
  });
});
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason.toString());
  }
);
