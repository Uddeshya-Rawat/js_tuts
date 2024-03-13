
/* Operators are used to perform some operations on data.
   there are many types of operators in js.

1 . Arithmetic operators :- needs minimum two operands 
   Addition , Subtraction ,Mutliplication , division , modulo, exponentiation
   exmample are ....
   */
   let a = 4;
   let b = 5;
   console.log("a+b=", a + b); // addition
   console.log("a-b=", a - b);//subtraction
   console.log("a*b=", a * b);//multiplication
   console.log("a/b=", a / b);//division (it gives quotient value)
   console.log("a%b=", a % b);//modulo (it gives remainder value)
   console.log("a**b=", a ** b)// ** is used for power
   
   
   
   
   /*
    2. Unary Operators :- only need one operand 
                          increment , decrement
                          example are..................*/
   let c=5;
   console.log("after ++c value of c=",++c);// 6  ...... here first c is incremented then its value is used.(pre-increment)
   console.log("value of c after --c=",--c);// 5  (pre-decrement)
   
   let d=7;
   console.log("value of d is",d);// 7......
   console.log("value of d++",d++);// 7...... here first value of d is used then it is incremented.(post-increment)
   console.log("value of present d is",d);//8.....
   
   
   
   /* Comparison operators :- they help us to compare two or more variables and after comparison the output is in binary form either true or false
                               . equal to (==)
                               . not equal to (!=) 
                               . greater than (>)
                               . smaller than (<)
                               . <=
                               . >=
                               . equal to and type (===)
                               . not equal to and type (!==)
                                 examples.....*/
   
   console.log("c==d ", c==d); 
   console.log("c!=d",c!=d);
   console.log("c>d",c>d);
   console.log("c<d",c<d);
   console.log("c<=d",c<=d);
   console.log("c>=d",c>=d);
   
   
   
   /* Logical Operators :- similar to comparision operators . output is either true or false . in actual we compare many expressions and every expression has a return value 
                          AND Operator (&&)  if any expression is false then AND operator will give false 
                          OR operator  (||)  if any expression is true then OR operator will give true 
                          NOT Operator (!)   NOT operator just reverse the output .
   */
   let x=5>4;
   let y=5==5
   console.log("x && y",x&&y); // true
   console.log("x || y",x || y); // true
   console.log("! x",! x); // false
   