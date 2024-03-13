const Num=100.948482;
console.log(Num); // js automatically defines num as a number

const newNum=new Number(100); // we are declaring that newNum is number 
console.log(newNum); 



//  METHODS //  
console.log(newNum.toString()); // converts number into strings   100
console.log(newNum.toString().length); // output length of the string   3
console.log(Num.toFixed(2));// output values upto 2 decimal places or the input given in it.   100.00


console.log(Num.toPrecision(3)); // gives precise value upto the value provided  101
console.log(Num.toPrecision(2)); //  1.0e+2   precise value  upto two digits and after that valaue are in exponential form


let number=10000000;
console.log(number.toLocaleString('en-IN')); // gives value in readable form .  1,00,00,000



/*.........................MATH.........................*/

// Math is a object. It has some methods and properties.

console.log(Math);
console.log(Math.abs(-4)); // converts all value to postive value
console.log(Math.round(4.567)); // output as roundoff value
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));


console.log(Math.random()); // gives random value between 0 and 1
console.log((Math.random()*10)+1);


// give output as any random number between  10-20;

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
console.log(Math.floor(Math.random()*(max - min + 1)) + min);