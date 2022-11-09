const PromiseAll = (iterator) => {
  const promises = Array.from(iterator);
  const len = promises.length;
  let index = 0;
  let data = [];
  return new Promise((resolve, reject) => {
    for (let i in promises) {
      promises[i]
        .then((res) => {
          data[i] = res;
          if ((index = len)) {
            resolve(data);
            index++;
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
const promise1 = Promise.resolve("promise1");
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 200, "promise2");
});
PromiseAll([promise1, promise2]).then(function (values) {
  console.log(values);
});
