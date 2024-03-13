

/*As we know we can create webpage using HMTL/CSS as html helps us to make the structure of a webpage and css helps to add the 
styles in the webpage . Through javascript we add the logic to the webpage for example if we press a button then what should happen 
to the webpage .... . JS helps to add the logic . To link a js file in html we simply write..

<script src="file_name.js"></script>

We can add multiple JS file in our html code .
we should always write this code before end of body tag as if we write in head tag it will mean we to apply script code first before html code 
and we will have null value in objects.


................... WINDOW OBJECT ................................ 
 
It is a global object with lots of properties and methods.It is automatically created by browser and is browser's object . 

for example:-

if we write window.console.log("hello"); it will not show a error as console is part of window object .
          window.alert("hello2"); alert is also a part of window object . it doesnt matter whether we write window or not 
          js already know the meaning of it .Our whole  html code is saved in window object as a object.




............................. DOM ................................... 

DOM stands for document object model . Like previously said our hmtl  code gets stored in the window with name of document object
and the way it is stored is in the form of tree model. every individual box is called node connected with other nodes called branches.
Every node is a object.In simple words we can access our hmtl file through Javascript using DOM model.when a web page is loaded the
browser creates the DOM automatically.DOM is a way of accessing the html code in js.

using console.log(window.document); it will print the whole code of html for us.
using console.dir(window.document); it will print the object of document.

As we upload the code in the server the user of webpage can't dynamically change the webpage as per his/her uses for example dark mode. But through
script we can do some changes through javascript.
In simple words to have dynamic changes in our website we use DOM.

In dom everything becomes a child or node even the content within tags , the space everything .




.......................... DOM MANIPULATION ...........................

DOM helps us to manipulate the HTML code by various methods.


...........................Accessing the elements...........

1.   document.getElementById("id_name");  :- As we know we can give our elements unique id . Through this id we can also access them in javascript
                                           using the given syntax. 
                                           It returns the value so it can be stored in a variable.It returns null value if there is no id exists with id given.

2.   document.getElementsByClass("class_name");  :- We can access our Elements by class name to . through this we can access multiple elemnts at the same time.
                                                  It returns the html collection . html collection is a structure which is similar to an array and it returns 
                                                  html structure of 0 length if there no such class exsists with the class name provided.
                                             
3.  document.getElementsByTagName("tag_name");   :- In this we access our elements using tag name and manipulate the hmtl elements.




......................Query selector...............

we use it too for accessing the elements of html 

1.  document.querySelector("tag/.class_name/#id_name");  :- using this we can access the elements the of the html. It returns the 1st element.

2.  document.querySelectorAll("tag/.class_name/#id_name"); :- Through this we can access all elements with same tag/class . It returns the nodelist i.e list of nodes.It has some prototype .
                                            


.........................Properties...................

using properites we can acccess and change the html content .

1.  tagName:- returns the tag for elements in node .
2.  innerText:- returns the text content of element and its children .
3.  innerHTML:- returns the plain text or html tags with text within it.
4.  textContent:- returns textual content even for hidden text .



.........................ATTRIBUTES.................

As we know that attributes are the more details about the tag in html .
we can change the through dom manipulation and can play with them.


1. getAttribute("attribute_name");  :- It returns the value of the attribute which is passed in it.

2. setAttribute("attribute_name","new_name");   :- It helps to set the attribute value .



.........................STYLE.........................

Through this we can add some style to css. 

node.style.property_in_camel_case.



.........................INSERT ELEMENTS................

there are two steps to insert element in the dom tree i.e create and add.

to create a node element :-   let element=document.createElement("element_name");

to add element :-

1. node.append(element)  adds at the end of node inside.
2. node.prepend(element) add at he start of node inside.
3. node.before(element)  add before the start of node outside.
4. node.after(element)  add after the end of node outside.


note:- all the styling done in js is inline styling that means it has highest priority.

// to convert the value given by querySelector in to array we use 

Array.from(name_of_variable)*/