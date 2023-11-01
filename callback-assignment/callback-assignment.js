// Callback assignment
// Following Javascript function getDate(), returns the current date as a string. The console.log statement after the
// function definition uses this function.
// let getDate = () => {
// let date = new Date();
// let d = date.getDay();
// let m = date.getMonth() + 1;
// let y = date.getFullYear();
// return `${d}.${m}.${y}`;
// }
// console.log('Date is '+getDate());
// Modify the code so that function getDate() returns the value using callback. Include also a code snippet that calls
// this modified function (=prints the same result to the console using the modified code).


// takes a function as a parameter and calls that function giving it a date as a parameter
let getDate = (callback) => {
  let date = new Date();
  let d = date.getDay();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  callback(`${d}.${m}.${y}`);
  }

// Prints whatever its given as a parameter
let printDate = (date) => {
  console.log(`Date is ${date}`)
}

getDate(printDate)


  