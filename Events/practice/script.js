let mode = document.querySelector("#modeBtn");
let currmode = "light";

mode.addEventListener("click", ()=>{
    if(currmode === "light"){
        currmode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        // using classes (from style.css)
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{
        currmode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        // using classes (from style.css)
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
});