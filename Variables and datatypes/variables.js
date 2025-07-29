console.log("Hey hi Rutuja Shete");

//variables declaration

fullname = "Rutuja shete";
console.log(fullname);

age = 24;
console.log(age);

price = 150.50;
console.log(price)

x = null;
y = undefined;
console.log(x, y);  //it will print "null undefined" on console

isfollow = false;
console.log("boolean : ",isfollow);

//good practice 
// use var or let or const before any variable name
// var --> can be redeclared and updated so usually not used much(global scope variable)
// let --> can't be redeclared but can be updated so mostly used(block scope variable), block --> { }
// const --> can't be redeclared or updated, since it is constant(block scope variable)

var age1 = 45;
var age1 = 86;
var age1 = 46;
console.log(age1); //op = 46 (it takes last assigned value)

let fullname1 = "Rutuja";
console.log(fullname1);
fullname1 = "shete";
console.log("updated fullname : ",fullname1);

const pi = 3.14;
console.log("constant pi value : ",pi);
// pi = 24;
// console.log(pi);  error --> Uncaught TypeError: Assignment to constant variable.

let a;
console.log(a); // op --> undefined (by default js assign value as "undefined")


//scopes
{
    let b = 2;
    console.log("(let) inside first block b = ",b);
}
{
    let b = 20;
    console.log("(let) inside second block b = ",b);
}
