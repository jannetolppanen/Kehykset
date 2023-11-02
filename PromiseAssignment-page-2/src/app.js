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
