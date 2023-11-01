let getDate = () => {
  let date = new Date();
  let d = date.getDay();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();
  return `${d}.${m}.${y}`;
  }
  console.log('Date is '+getDate());
  