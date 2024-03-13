/* ARRAYS 
      arrays are the collection of elements of same datatype . Although we can store diffrent dataypes in same arrays but it is not preffreable.
      In this item are storred in sequential manner .

      syntax:- let marks=[23,34,34,56,7,89,90];

      here all items have position called index.Index start from 0.

The array is an object which enables us to store a collection of multiple items, elements  under a single variable name.
arrays in js are not primitive but are as array object . 
1. arrays are resizeable.
2. arrays are zero indexed and are accesed usng positive integers only .
3. when copies are made they are shallow copies. 

// shallow copies :-  shallow copies have the same refrence as their parent and change in any either copy or parent makes changes in both.
*/

let marks =[34,25,67,89,90,56,37];
//console.log(marks);
 
let myArr2=new Array(7,8,9,10); // another way of declaring array

// if we try to find out the typeof array it will show object so in js arrays are objects  but we learn them separately .

//console.log(typeof(marks));// object..

// arrays are mutable that means we can access the elements of array and can change them with our accordance . also if we try access the index more thani index . It will give output undefined .

marks[0]=25;
marks[1]=45;
marks[2]=90;
//console.log(marks);
//console.log(marks[8]);

// accessing arrays through loops 

let cities=["delhi","mumbai","jaipur","dehradun","kolkata"];// arrays of string
for(let i=0;i<cities.length;i++){
    //console.log(cities[i]);
}

// accessing arrays using for of loop

for(let city of cities ){
   // console.log(city.toUpperCase());// toUpperCase make everything in uppercase in a string .
}

// question: your are given a array of marks of student arr_marks[85,97,44,37,76,60]. find the average .

let arr_marks=[85,97,44,37,76,60];
let avg=0;
for(let i=0;i<arr_marks.length;i++){
    avg+=arr_marks[i];
}
avg=avg/arr_marks.length;
//console.log(`average marks of the class is : ${avg}`);// template literals is used .


// question: for a given array of price with 5 items item=[250,645,300,900,50],All items have 10% off on them .Change the array after applying offer to them in same arrray.

let item=[250,645,300,900,50];
for (let i=0;i<item.length;i++){
    item[i]=item[i]-item[i]*10/100;
   // console.log(`new price of item no.${i} is : ${item[i]}`);
}


/* ARRAYS METHODS */

// push : it used to add elements in array . The new element always get added in last of array.Also it returns the updated size of array.

let foodItems=["pizza","burger","momos","dosa","truffel"];
console.log(foodItems);
let no_of_items=foodItems.push("chips"); // returns updated value of array.
//console.log(`no of items after updation : ${no_of_items}`,foodItems);


// we can add multiple items at same time ...
foodItems.push("idli","shawrma","eggroll");
//console.log(foodItems);


// pop: it deletes items from last adn return the element.
let food= foodItems.pop();
//console.log(`the food item which is deleted is : ${food}`);
//console.log(foodItems);

// unshift : ELements are added in start of array .
foodItems.unshift("vadapau");
//console.log(foodItems);

//shift : Deletes elements from start.and returns the deleted element.
let element=foodItems.shift();
//console.log(`deleted item is :${element}`,"and array is :",foodItems);

// slice , splice 
let newArr=[10,20,30,50,90,60,70];
let newArr2=newArr.slice(1,4);  // slice takes the copy of portion of array excluding last index 
//console.log("A",newArr); 
//console.log("B",newArr2);

let newarr3=newArr.splice(1,4);  // splice take out  the portion of array given as parameter.It changes the actual array.
//console.log("A",newArr);
//console.log("C",newarr3);

// filter:- it returns the array according to the condition given. It is also a higher order function.
let myNum=[1,2,3,4,5,6,7,8,9,10];
let newNum=myNum.filter((num)=>{ 
    return num>4;
})
console.log(newNum,myNum);
// when ever we use scope we have to write return keyword to return the array/value. 

let newNum2=myNum.filter((num)=>num>4)  // here we dont need return keyword
console.log(newNum2);


// chaining of methods 

newNum=myNum
       .map((num)=>num*10)
       .map((num)=>num+1)
       .filter((num)=>num>=50)
       console.log(newNum);