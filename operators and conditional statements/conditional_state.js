console.log("-----------------------------------------------------------------------------------------------");
console.log("Conditional statements");
// ----> 1) If-else statement
//Example 1
let age = 16;
console.log("age =",age);
if(age >= 18){
    console.log("You can vote :)");
}else{
    console.log("You can not vote :(");
}

age = 25;
console.log("age =",age);
if(age >= 18){
    console.log("You can vote :)");
}else{
    console.log("You can not vote :(");
}

//Example 2
let mode = "dark-mode";
let color;
if(mode === "dark-mode"){
    color = "black";
}else{
    color = "White";
}
console.log("Color in dark mode :",color);


// ----> 2)else-if statements
let marks = 90;
console.log("Marks =",marks);
if(marks<60){
    console.log("fail :(");
}else if(marks<80){
    console.log("Pass with first class :)");
}else{
    console.log("Pass with Distinction :):)");
}


// ----> 3)Ternary Operator
// condition ? o/p if condition is true : o/p if condition is false;
let myage = 10;
console.log("age =",myage);
console.log(myage>18 ? "can vote" : "can not vote");
myage = 29;
console.log("age =",myage);
age>=18 ? console.log("Can vote") : console.log("Can't vote");


// ----> 4)Switch statements
console.log("Switch statements...");
let choice = "medium";
switch(choice){
    case "small":
        console.log("Price of small size shirt is : $10.");
        break;
    case "medium":
        console.log("Price of Medium size shirt is : $20.");
        break;
    case "large":
        console.log("Price of large size shirt is : $30.");
        break;
    default:
        console.log("Sorry, Invalid choice");
}

//Practice 
//let score = 62;
let score = prompt("Enter the score");
console.log("You have entered the Score =",score);
if(score>=90 && score<=100){
    console.log("Grade A");
}else if(score>=70 && score<90){
    console.log("Grade B");
}else if(score>=60 && score<70){
    console.log("Grade C");
}else if(score>=50 && score<60){
    console.log("Grade D");
}else{
    console.log("Grade F");
}
