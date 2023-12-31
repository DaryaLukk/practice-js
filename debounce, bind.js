function fetchUrl(url) { // нельзя написать ф-ю через const, тк нельзя изменить контекст
  console.log(`fetching ${url} ...`, this.firstName);
}

const user = {
  firstName: 'Bob',
};

function debounce(fc, mc) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => { fc(...args); }, mc);
  };
}

const fetching = debounce(fetchUrl.bind(user), 1000);

fetching(1);
fetching(2);
fetching(3);
// не получится изменить контекст через call, мб из-за того что в debounce возвращаем callback
fetching.call(user, 4);
