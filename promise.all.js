const rv = (data, ms) => new Promise((res) => { setTimeout(res, ms, data); });

// const rj = (data, ms) => new Promise((_, rej) => setTimeout(rej, ms, data));

function promiseAll(promises) {
  const res = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      // Promise.resolve(promise)
      promise
        .then((data) => {
          count += 1;
          res[i] = data;
          if (count === res.length) {
            resolve(res);
          }
        })
        .catch((e) => reject(e));
    });
  });
}

promiseAll([rv(1, 200), rv(2, 100)]).then(console.log);
