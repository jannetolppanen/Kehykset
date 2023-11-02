const lupaus = new Promise((resolve, reject) => {
  a = true;
  if (a) {
    resolve('läpi menee');
  } else {
    reject('ei mene');
  }
});

// lupaus
// .then((wat) => console.log(wat))
// .catch((wat) => console.log(wat))
// .finally((wat) => console.log('finally'))

asynkki = async () => {
  const result = await lupaus
  console.log(result)
}
asynkki()