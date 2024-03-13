/* there are mainly two types of datatypes in js .
   1. primitive (pre defined).
   2. non-primitive (user defined).

 Primitive :- they are predefined dataypes. there are 7 of them in js.they are stored in stack and we only get a copy of it that is we call them by value
              1.number
              2.string
              3.boolean
              4.undefined (by default all varibales have undefined value till we assign the value)
              5.null
              6.bigint   (it is used to store big numbers)
              7.symbol
              example are below.......  
   */
              let age=25;  
              console.log(age);   
              let Name="uddeshya";
              console.log(Name);
              let Pass="true";
              console.log(Pass);
              let Fail=null;
              console.log(Fail);
              let a;
              console.log(a);
            
            /*  Non-Primitive :- they are user or programmer defined datatypes. It is collection different or same dataypes.they are stored in heap and we get them by reference .
                                 It works on the concept of keys and values.
                                  
                                 keys are the name of varibales.
                                 values are the things assigned to them.
                                   
                                 type  name of object 
                                 {Key:value,};
            
                                 example given below.....
                                 
            */
            const student = { 
                fullName:"Uddeshya",
                age:24,
                cgpa:6,
                result:"pass",
              };
            /* 
               1.to access the object simply write its name 
               2.to access the object elements use dot operator or simply write the element name with square bracket
            */
            console.log(student);
            console.log(student.fullName);
            console.log(student.age);
            console.log(student.cgpa);
            console.log(student.result);
            
            console.log(student["fullName"]);
            console.log(student["age"]);
            console.log(student["cgpa"]);
            console.log(student["result"]);
            
            /*  we can also change the value of elements of object */
            
            student.age=25;
            student.cgpa=8;
            console.log(student.age);
            console.log(student.cgpa);
            console.log(student);
            console.log("uddeshya rawat");
            
            
            /* type of */
            console.log(typeof "uddi");  // string
            console.log(typeof 23); //number
            console.log(typeof null); //object