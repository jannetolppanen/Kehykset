const loadScriptA = (callback) => {
  let script = document.createElement('script');
  script.src = 'src/delayedScriptA.js';
  script.onload = () => callback();
  document.head.append(script);
};

const startButtonClick = () => {
  loadScriptA( () => {
    delayedFunctionCallA();
  });
};
