/* if else statements are conditional statements
   conditional helps us to run a certain piece of block according to conditions  */
// example......

let age=19;
if (age>=18){
    console.log("You are eligible to vote.")
}
else{ 
    console.log("You are not eligible to vote.")
}

/* to write a program for even and odd */

let marks =2;
if(marks%2==0){
    console.log("Number is even ");
}else{
    console.log("number is odd ");
}


/* now if we want to check multiple conditions  we can do it through else if statements */

// example..............
 let color="blue";
 if(color=="black"){
    console.log("black theme applied");
 }
 else if(color=="white")
 {
    console.log("white theme is applied ");
 }
 else if(color=="blue"){
    console.log("blue theme is applied ");
 }

 // write a program to which give grades accodring to their marks ?

 let num = prompt("enter marks"); // promt is used for taking inputs from user..
 if (num<33){
    console.log("fail");
 }
 else if(num>=33&&num<=49){
    console.log("grade : D");
 }
 else if(num>=50&&num<=69){
    console.log("grade : C");
 }
 else if(num>=70&&num<=89){
    console.log("grade : B");
 }
 else{
    console.log("grade : A");
 }



 /*  falsy values 

 false , 0 , -0, bigint 0n , null , undefined , nan,  

     remaining are true */ 