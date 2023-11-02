const loadScriptA = (callback) => {
  let script = document.createElement('script');
  script.src = 'src/delayedScriptA.js';
  script.onload = () => callback();
  document.head.append(script);
};

const loadScriptB = (callback) => {
  let script = document.createElement('script');
  script.src = 'src/delayedScriptB.js';
  script.onload = () => callback();
  document.head.append(script);
};

const startButtonClick = () => {
  loadScriptA(() => {
    console.log('The delayedScriptA.js is now loaded');
    delayedFunctionCallA(() => {
      loadScriptB(() => {
        console.log('The delayedScriptB.js is now loaded');
        delayedFunctionCallB()
      })
    });
  });
};

const startPromiseButtonClick = () => {
  const promise = loadScriptPromise('src/delayedScriptA.js')
  promise
  .then(
    (script) => {
      console.log(`${script.src} is loaded using Promise`)
      delayedFunctionCallA()
    },
    (error) => { alert(`Error ${error.msg}`)}
  )
  promise.then((script) => alert('One more promise handler!'))
}


const loadScriptPromise = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error ${src}`))
    document.head.append(script);
  })
  }
