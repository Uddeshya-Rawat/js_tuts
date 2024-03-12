let fullName = "Uddeshya";
console.log(fullName);

/* ABOUT VARIABLES
  1. console.log() is used as print function or it is used to display the content.
  2. .js extension is used for saving file of javascript 
  3. js similar to other languages.
  4. js is dynamically typed language that means we dont need to declare the data type
     of variables it is done in compile time only.
  5. It has varibales . varibales are container in which we store the data.
  6. Example- full Name is container or varibale which is storing string .
*/

let age = 25;
console.log(age);
let sirName = "rawat";
console.log(sirName);


/* keyword : there are some words in language which have some meaning and are not used as
             variables name or function name , object name etc. 
    
             let , const , var

    1. var:- was used before 2015 standards . it is a global decalration.
             it can be redeclared and updated.
              Example given below */

var name = "udde";
console.log(name);
var name = "rawat";
console.log(name);

/*  2. let:- using let, varibale can't be redeclared and but can updated.it have box decalartion (box is peace of code inside curly braces)
             example given below */

let myName = "uddeshya";
console.log(myName);
/*let myName="rawat";*/ /*red underline indicates error */
myName = "rawat";  /* value gets updated */
console.log(myName);

/*  3. const:- using const, variable cant be redeclared and cant be updated . it have box declaration.
               example given below .*/

const age2="34";
console.log(age2);
/*age2="36"; */  /* this will give error */
