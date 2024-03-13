/* ............................EVENTS IN JAVASCRIPT............................*/


/* The change in the state of an object is called the event.event are fired to notify the interseting changes that may affect code execution. Events are basically
triggering of something when a user use a webpage or website .

example:- click on submit button and our info gets forwarded to database,
          change in the color of links when we hover on them.
          a form is submitted.

... some events are....
1. mouse events (click , double click , hover)
2. keyboard events (keypress , keyup, keydown)
3. form events (submit)
4. print event and mant more.    

// INLINE EVENT HANDILING :- when we handle event within our html tags it is called inline handling . we dont prefer the inline handling .
*/

// now we will access html  code and do some event hadling in javascript.

/* to have some event    1.  first we will access the the tag.
                         2. then by  accessing we will use arrow function to handle the event.

                         node.event=()=>{
                            //event
                         }
                         */

                         let btn=document.querySelector("button"); // acessing the element.

                         btn.onclick=()=>{  // event
                             console.log("you are using js to access and handle events of button");
                         
                         }
                         
                         let div=document.querySelector("div");
                         div.onmouseover=()=>{   // event 
                             console.log("you accessed the div")
                             div.style.backgroundColor="purple";
                             div.innerText="you are using js now";
                         }
                         
                         // NOTE:- if we handle event in both ways in inline handling and javascript handling the js handling have more priority.
                         
                         
                         // there is another method for events using addEventListner("event",callBackFunction,false)