// THIS is used for the current context of the scope .It is used for objects only

const user={
    userName:"uddeshya",
    id:34,
    welcomeMessage:function(){   // we have created our own method for object user
        console.log(`welcome ${this.userName}, you id is ${this.id}`); // this operator is used
    }
}

user.welcomeMessage();

function chai(){
   let Name="uddeshya";
    console.log(this.Name); // undefined
}
chai();

//  implicit return of arrow function :- in this if we have a small one liner code under arrow function then we can write it as

const sum=(num1,num2)=>(num1+num2); // it automatically understands that it should return the value in brackets.

console.log(sum(5,6));



//  IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function codePrint(){  // named iife
    console.log("connected to DB");
})();                              
// we use two brackets first one is to protect from polluting . sometimes we import the files hich have some global variables and can pollute our current program
// second bracket is used for the execution of function.
// also  semicolon is used after execution bracket to stop the execution other wise function did'nt know when to to stop.
// we can also write arrow function.

(()=>{   // unnamed iife
    console.log("connected to DB 2");
})();