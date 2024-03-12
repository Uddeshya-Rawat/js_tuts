// in this we will talk about loops 

/* loops are used to run a piece if code again and again . theyanre also called iterations.
   suppose we want to write our name 10 times we can do it through loops .
  
   types of loops :-

  1. for loop :- sytanx
                         for(initialzation ; ending condition ; updation) {
                               block of code...;
                            }
                        first we write the initialize condition , then control goes to ending conditon if its true then control runs the
                        piece of code and when whole code run then control goes to updation conditon , after this again control goes to ending condtion
                        initializtion condtion runs only one time after that ending and updation runs automatically till ending conditon is false.*/
                         // example.... pritning our name 10 times....
                         for( let i=1;i<=10;i++)
                         {
                          // console.log("uddeshya rawat"); // 10 uddeshya rawat..output
                         }


// write a prorgam to add sum of first n natural number ?
let num = 10
let sum=0;
for (let i=1;i<=num;i++){
   sum=sum+i;
}
//console.log("sum is ",sum);


/* 2. while loop:- it is similar to for loop but syntax is different 
                   we just write condition in brackets initialization is done before using while loop
                   and updation is done within code block.
                   
                   initializaton 
                   while(condition){
                     code;
                     updation
                   }*/
                   // example......

                   let count=1;
                   while(count<=5){
                     //console.log("hello world");
                     count++;
                   }



/*   3. do while loop:- it is as same as other loops but code is written in do {}
                        and after that condition is written. In this code is executed atleast one time whether condition is true or false 
                         
                        initialization 
                        do{
                           code;
                           updation

                        }while(condition) 


     4. for of loop:- this loop is used for arrays and strings.
                      for(let var in string_name/array_name)  {

                      }   */

      let Name="uddeshya rawat";
      let number=0;
      for (let val of Name){
       // console.log("value :",val);
        number++;

      }
     // console.log(number);// to find size if string ...... it also count the white space 


    /* 5. for in loop:- it used for objects in js.here it always returns key. to access value of a key we use object name[key]
                       for (let key in object_name){

                       }  
                          */
                         
       let student ={
        firstName:"uddeshya",
        cgpa:7.5,
        age:25,
        isPass:true,
      };
      
      for (let key in student){
       // console.log("key:",key ,"value:",student[key]);
      }

 // break and continue

for(let i=0;i<=10;i++){
  if(i==5){
   // console.log("5 is my number");
    break;              // it breaks the loop addn come out of the scope of loop
  }
 // console.log(i);
}

for(let i=0;i<=10;i++){
  if(i==5){
    continue;              // it breaks the loop addn come out of the scope of loop
  }
  //console.log(i);
}  



/*.................MAPS.....................*/

// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
// Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method
// (that is, there wasn't a key with the same value already in the map when set() was called).

const country= new Map(); // declaring the object map and storing it 

country.set(1,"India");
country.set(2,"USA");
country.set(3,"France");
country.set(4,"Japan");

//console.log(country);    // will print object country

// using loop print the content of map 

for(const [key,value] of country){  // [key,value] is called destructuring of array.
//  console.log(key,value);
}


// foreach is a array method to use loop on arrays

let languages=["javascript","c++","python","java","swift"];
  

languages.forEach(function (val){ // foreach is a higher order function therefore it takes a callback function wiht no name. Also it doesnt return the value/values.
  console.log(val);
})   