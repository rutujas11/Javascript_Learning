//accessing Html tag in js
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
let name = div.getAttribute("name");
console.log(id);
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newclass"));



//accessing and changing style directly in js file
div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.fontSize = "20px";
// div.innerText = "Hello!";

//----> Adding new elements in style directly in js file
//1)create element
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
//2)add it to/on screen (4 methods)
   //i)adds at the end of node(inside)---> add button at the end of div
     div.append(newBtn);

   //ii)adds at the start of node(inside)---> add button at the start of div
     div.prepend(newBtn);

   //iii)adds before the node (outside of div)
     div.before(newBtn);

   //iv)adds after the node (outside of div)
     div.after(newBtn);

  // Adiing new heading inside body without going into index.html file
   let newheading = document.createElement("h1");
   newheading.innerHTML = "<i>Hi, I am New one :)</i>";
   document.querySelector("body").prepend(newheading);


//3) removes the element
    para.remove();  //removes the paragraph defined with name para
    newheading.remove(); //removes new heading



