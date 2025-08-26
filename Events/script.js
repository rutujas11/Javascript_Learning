let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log("btn1 was clicked");
    console.log(evt.type);
    console.log(evt.target);
}
btn1.addEventListener("click", ()=>{
    console.log("btn1 was clicked-hand1");
});

const handler2 = ()=>{
    console.log("btn1 was clicked-hand2");
}

btn1.addEventListener("click",handler2);

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked-hand3");
});

// want to remove hand2
btn1.removeEventListener("click", handler2);

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("You are inside box");
}

