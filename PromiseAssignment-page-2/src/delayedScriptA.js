// delayedScriptA.js

console.log('delayedScriptA started..');
function delayedFunctionCallA(callback) {
  console.log('delayedFunctionCallA() called...');
  callback()
}
