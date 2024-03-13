/* ......................FUNCTIONS AND METHODS................................ */

/* FUNCTONS :- functions are the user defined piece of code which can be used again and again . They help to reduce redundancy. 
              
        * function are defined like
         
         function  function_name ( parameter1 , parameter2....... ){ 
              // code ;
         
        }

         * calling a fuction 

        function__name( argument1 , argument2......... );*/


        function print(message){       // defined a fucntion with parameter of string 
            console.log(message);
        }
        
        print("hello, world!"); // called a function with arguments and passed value.
        
        // write a program to add two number using function?
        
        function sum ( a, b){    // here paramters a and b are local variables and are block scoped .
            let s = a+b;
            return s;   // we an return the values in function using return keyword. It return one value and can be array , string , numbers.....
        }
        let c= sum(4,5);
        console.log(c);
         
        
        sum; // refernce  is given of function
        sum(7,8); // function gets executed.
        
        function userLoggedin(userName="udde"){        // if there is no argument passed then userName variable will use udde as it's value
                  return(`${userName} is logged in`);
        }
        
        console.log(userLoggedin());
        console.log(userLoggedin("uddeshya rawat"));
        
        
        //................... more on functions...............................
        
        // suppose we dont know the no. of arguments will getting passed, so in that case we use rest operator . Rest operator is same as spread opertor 
        
        function myCart(...num){
            return num;  // returns the array of parameters.
        
        }
        console.log(myCart(100,200,300,400,500));
        
        function myCart2(val1,val2,...val3){  // in this case val1 adn val2 will be variables and val3 will be array of remaining value passed.
            console.log(val1,val2,val3);
        }
        myCart2(200,300,400,500,600,700);
        
        
        
        //.......passing objects as arguments.........
        // our function didnt know whether we will pass api objects or anything else . it works according to the  parameters given.
        
        const myObj={
            userName:"uddeshya",
            id:21
        }
        
        function printObject(anyObject){
                 console.log(`user name is ${anyObject.userName} and id is ${anyObject.id}`);
        }
        
        printObject(myObj);
        
        printObject({  // we can pass object like this too.
            userName:"aka-shit",
            id:21,
        })
        
        
        
        
        
        
        
        /* ...........................ARROW FUNCTIONS........................................ 
        
        arrow functions are simpler form of writng the functions .
        
        const name_of_function = (parameter1, parameter2){   
                      code;
                      return;
        } 
        
        const multiply=(x,y)=>{     // const multiply is a variable in which we store the retrun value of arrow function.
              return x*y;
        }
        console.log(multiply(6,7)); // if code are small and are repeating then arrow fucntion are preferrable.
        
        
        
        // question :- create a function which take string as argument and return the no of vowels in it.
        
        function vowels(str){
            let count=0;
            for(let i=0;i<str.length;i++){
                if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
                    count++;
                }
            }
            console.log(`no of vowels :${count}`);
        }
        vowels("happy ending");
        vowels("hey there i am using js.")
        
        
        
        /* .....NOTE :- 1. Methods are are fuctions but when they are binded with objects they are called methods .
                   2. In javascript the function are also passed as parameters .
                   3. Higher order functions are those functions which either take functions as parameters or return functions .
        */
        
        
        
        
        
        // for each loop in array :- for each is a method which is higher order function it takes parameters as function . The fucntion which is passed works for every element in array.
        /* syntax:- arrName.forEach( callBackFunction {
        
        }) 
        
        
        
        let arr=[1,2,3,4,5,6,7];
        arr.forEach((val => {  // arrow function is passed as parameters there are two parametrs whcih can be passed they are index and array itself.
            console.log(val);
        }))
        
        let str2=["udde","akshit","Rakat","aman","sagar"];
        str2.forEach(function Names(val){   // simple function is passed
             console.log(val); 
        })
        
        // using forEach loop make a code to find square of each number given in array 
        
        
        let arrNum=[1,2,3,4,5,6,7];
        arrNum.forEach((val)=> {
            console.log(val**2);
        })
        
        
        
        
        
        /* Map method of array :- It creates a new array  with the result of some operations. The value it callbacks returns are used to form array .
          
        arr.map(callBackfcn(val,index,array){
        
        });
        
        Que:- filter out the index in which marks are 90+.
        
        
        let arrMarks=[90,97,56,78,98,91,45,89,34,95,23];
        let arrMarks90=arrMarks.filter(val=>{          // filter methods is applied to all elements of array . it is a array method. if the condition is true it returns that element only.
                return val>90;
        })
        console.log(arrMarks90);*/