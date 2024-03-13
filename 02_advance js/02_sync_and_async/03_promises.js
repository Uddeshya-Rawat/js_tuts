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

*/

const promiseOne=new promise(function(reslove,reject){   // created a promise
    // do async tasks
    // db calls , network calls ,crytpography

    setInterval(function(){
        console.log("async task completed");
        reslove();

    },2000)
})

// consuming the defined promise
promiseOne.then(function(){  // then takes function as parameter and is directly connected to resolve.
    console.log("promise consumed");
})