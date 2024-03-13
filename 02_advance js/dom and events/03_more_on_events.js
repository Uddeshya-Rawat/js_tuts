/* .........EVENT OBJECT...........*/

/* It is a special object that has details about the event . All event handlers have access to the event objects properties and methods.

node.event=(e/evt/event)=>{
    //handle here;
}

This is called the handler. */

let button=document.querySelector("button");

button.onclick=(e)=>{
    console.log(e);
    console.log(e.type); // tell the type of event 
    console.log(e.target); // returns the whole tag and element.
    console.log(e.clientX,e.clientY); // they both tells the position of event accoured on webapage.
}

// the drawback is that we can only write one function for the one event .
// to have mutiple events we use event listners.


/*.........EVENT LISTNERS..........

Event listners wait for the event to come and when event occur they gets executed.

node.addEventListner("event",callback)   it is used to add a event . callback are the functions which are given as arguments. this callback is also called handler.

node.removeEventListner("event",callback) in this we shoud have a refernce of callback function.

*/

let handler3=(e)=>{
    console.log("eventlistner hadnler3");
}

button.addEventListener("click",()=>{
    console.log("eventlistner handler1");
})
button.addEventListener("click",()=>{
    console.log("eventlisnter handler2");
})
button.addEventListener("click",handler3);

// to remove a handler we need the reference.

button.removeEventListener("click",handler3);

// some events (read and apply about them in mdn docs)
// type , timeStamp ,defaultPrevented
// target , toElement , srcElement , currentTarget
// clientx , clienty ,screenX, screenX
// altKey, ctrlKey , shiftKey , keyCode


// event listners has addEventListner("event",callBackFunction,true/false) default is false
// false is called  event bubbling.
// true is event capturing. 

// false works inside out , true works from outside to inside 
