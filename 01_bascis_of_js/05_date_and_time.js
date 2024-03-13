let myDate=new Date(); // it is little bit hectic to work on dates although mdn is working on it.
//console.log(typeof(myDate));  // object 
//console.log(myDate);
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toUTCString());
//console.log(myDate.toString());


let myDate2=new Date(2024,0,23,4); // date in the form of array  as array starts form 0 . here 0 indicates jan 
console.log(myDate2.toLocaleString());

// other methods to get define dates

let mydate3=new Date("01-02-2024");
////console.log(mydate3.toLocaleString());

let myTimeStamp=Date.now(); // this format returns the time in milisecond from 10 jan 1970.
console.log(myTimeStamp);

// to convert it into seconds
let inSeconds=Math.floor(myTimeStamp/1000);
console.log(inSeconds);
