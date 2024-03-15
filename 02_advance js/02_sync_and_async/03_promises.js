/*.......................promises...........................
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


as promise is a object we can create and instance using new keyword
promises helps to reduce callback hell
we can create our own promise.
promise takes callback function and the function has two parameters reslove and reject . Either promise is resolved or rejected



const promiseOne = new Promise(function (resolve, reject) {   // created a promise
    // do async tasks
    // db calls , network calls ,crytpography

    setTimeout(function () {
        console.log("async task completed");
        resolve();// if we dont write this our then will not get executed as they both are connected to each other
    }, 1000)
})

// consuming the defined promise
promiseOne.then(function () {  // then takes function as parameter and is directly connected to resolve.
    console.log("promise consumed");
})

// another way of defining the promises 

new Promise(function(resolve,reject){  //  in actual what we are doing is we are making a promise of we get data from db or any other place then resolve means the data fetching is completed and we can move forward to then
    setTimeout(function(){
        console.log("async work no.2");
        resolve();
    },2000);
}).then(()=>{
    console.log("promise2 exectued")
})

// promise three  (pass values in resolve)

const promiseThree= new Promise((resolve,reject)=>{  // made a promise
    setTimeout(()=>{
        console.log("async task three completed");
        resolve({userName:"uddeshya",
    userEmail:"uddeshyarawat4@gmail.com"}) // we can get data in object form but we can pass anything in it either it be function or ohter paramters
    },2000)
})

promiseThree.then((user)=>{   // then is connected to resolve and we passed a object reference to it
    console.log(user);
})

// promise 4 (use of reject)

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false; // swap with true reject will get executed
        if(!error){
            resolve({userName:"uddeshya rawat",userEmail:"uddi@doodle.gom"})
        }
        else{
            reject("something went wrong");
        }

    },2000)
})
   

promiseFour.then((user)=>{
    console.log("aync task 4 completed");
    console.log(user.userName); 
})
//.then((userName)=>{
 // console.log(userName)
//})
.catch((str)=>{
    console.log(str);
})
.finally(()=>(console.log("promise is executed "))); // finally will get executed automatically it doesnt depend on resolve or reject
*/


// promise 5 using async await 

const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=false; // try with true
        if(!error){
            resolve({language:"javascript",teacher:"udde"});
        }
        else{
            reject("Error: something went wrong");
        }

    },2000)
})
// async function is used for promise
//The async function declaration creates a binding of a new async function to a given name.
// it has keyword name await  

async function consumePromise (){
   try{                            // try is connected to resolve
    let response=await promiseFive;
    console.log(response);
   }
   catch(error){                     // catch is connected with reject
       console.log(error);
   }

}

consumePromise();