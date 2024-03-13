/* strings are sequence of characters to represent a text or sentence or paragraph all these are done through using strings or are called strings.
   strings are declared like */
  
   let str="uddeshya rawat";
   console.log(str);
   let str2='uddeshya rawat';
   console.log(str2);

  // both are correct method of declaring string.
  //strings have some predefined properties and functions .These functions are called methods.
  // str.length is used to find the length of string.
  let y=str.length;
  console.log(y); //14 answere

  /* strings are stored in form of charcter arrays[] where index are started from 0 therefore we can access any character of the string.
     Also strings are immuatable. That means we can't change the elements directly through index like arrays.  */
   
  console.log(str[0]);//u
  console.log(str[1]);//d
  console.log(str[2]);//d
  console.log(str[3]);//e
  
  str[2]="m";// this will have no effect in string .

  console.log(str);

  /* TEMPLATE LITERALS */   
  
  /* Template literals are also used to define strings in js which are defined under bastic quotes (``).
  or a way of adding expressions in strings and they act like they are strings */

  let item={
    price:60,
    Name:"mango",
  };
  console.log("the price of ",item.Name," is",item.price);// very uneasy to write the prorgam .
  let output= `the price of ${item.Name} is ${item.price}`;//using template literals .
  console.log(output);

  /* template literals helps us to embed expressions in strings first these expressions are solved then the output of expression is shown as string.
  This is called string interpolation .*/

  let str3=`the sum of 1+2+3 is  ${1+2+3}`;// the sum of 1+2+3 is 6.....
  console.log(str3);

  //question:- create a program where you take input from user . input should be username and should give output @username+number of characters in username?

  let fullName=prompt(" Write your Full Name");
  fullName="@"+fullName+fullName.length;
  console.log(fullName);
  