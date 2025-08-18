// Q1. create new button element. Give it a text "click me", background color of red & text color of white
// insert the button as the first element inside the body tag 

let div = document.querySelector("div");
let button = document.querySelector(".btn");
button.style.backgroundColor = "red";
button.style.Color = "white";
div.prepend(button);

//without using html tags
let newbtn = document.createElement("button");
newbtn.innerHTML = "<button>Click me!</button>";
newbtn.style.Color = "white";
newbtn.style.backgroundColor = "blue";
document.querySelector("body").prepend(newbtn);


//Q2. create a <p> tag in html, give it a class & some styling. 
//now create a new class & some styling. Now create a new class in CSS and try to appendthis class to <p> element.
let para = document.querySelector("p");
//Use ClassList(function which list outs all classes of that node) for it

