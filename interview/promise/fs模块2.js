function mineReadFile(path) {
  return new Promise((resolve, reject) => {
    require("fs").readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
mineReadFile("../面经.md").then(
  (value) => {
    console.log(value.toString());
  },
  (data) => {
    console.log(data);
  }
);
