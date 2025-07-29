console.log("-----------------------------------------------------------------------------------------------");
console.log("Alert and Prompt");
// alert("hello!"); //gives one time popup

// prompt("Hello"); //gives popup and also can take input
// let myname = prompt("hello ");
// console.log(myname);

//Example 1
let num = prompt("Enter a number: ");
console.log("You have entered the number :",num);
if(num%5 === 0){
    console.log("Number is multiple of 5!");
}else{
    console.log("Number is not a multiple of 5!");
}
