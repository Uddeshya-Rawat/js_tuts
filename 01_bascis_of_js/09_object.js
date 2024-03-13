/*
..............OBJECTS.................
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. 
in actual the keys in javascript are saved as strings.
*/

let mySym=Symbol("udde");
let userDetails={
    userName:"uddeshya",
    isLogged:true,
    location:"jaipur",
    age:25,
    [mySym]:"myKey",  // to make symbol as key we use this way
    "fullName":"uddeshya rawat", // we can also declare key value  pairs like this too.

}

// to access key

console.log(userDetails.age);
console.log(userDetails["age"]); // as keys are strings.we should follow this mehtod
console.log(typeof (userDetails[mySym]));

// we can make functions added to objects 

userDetails.greeting=function (){
    console.log("hello there i am function made using objects");
}
console.log(userDetails.greeting()); 


userDetails.greeting2=function(){
    console.log(`hello my name is ${userDetails["fullName"]} and my age is ${userDetails["age"]}`); // string manipulation
}
console.log(userDetails.greeting2());


// objects nesting

const tinderUser={
    email:"uddi@tinnder",
    Name:{                      // object inside object
        firstName:"uddeshya",
        lastName:"rawat",
        userName:{
            nickName:"snorlax",
            nickName2:"hakari",
        }

    }
}

console.log(tinderUser.Name.userName);     // to access the nested objects use dot operator again and again.


// to merge many objects in one object we use spread

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4={...obj1,...obj2,...obj3} // spread 
console.log(obj4);


// when we get data from database it is mostly in the form of array of objects .
const arr1=[
    {
        id:21,
        address:"rajeev nagar"

    },
    { id2:23,
        address:"lower rajeev nagar"

    },
    {
        id3:24,
        address:"upper rajeev nagar"


    }
]

console.log(arr1[0].address); // to accesss the array of object
console.log(arr1[1].address);
console.log(arr1[2].address);
