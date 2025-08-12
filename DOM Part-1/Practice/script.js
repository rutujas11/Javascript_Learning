//---> Practice Q1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " From Apna College Student";
console.dir(h2.innerText);

//---> Practice Q2
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

//Using For loop
let cnt = 1;
for(i of divs){
    i.innerText = `New unique value ${cnt++}`;
}

