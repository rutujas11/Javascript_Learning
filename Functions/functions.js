//Functions ---> Block of Code that performs a speific task, can be invoked whenever needed
//Block Scope

//1) Simple Functions
function myFunction(){      //fxn defination
    console.log("Welcome to Apna college!");
    console.log("We are learning JS :");
}
myFunction();  //fxn calling

//make function to do addition
function addition(x, y){
    console.log("Addition using simple function: ",x+y);
}
addition(4,5);


//2) Arrow Functions
//Compact way of writing a function
//Addition using Arrow function
const arrowsum = (a,b)=>{
    console.log("Addition using Arrow function: ",a+b);
};
arrowsum(4,5);


//---->ARRAY Methods

//3) forEach() (used in arrays)
//ex--> arr.forEach(callBackFunction)
//forEach(value,  index, array itself) --> parameters that can be used in forEach fxn
// callBackFunction ---> fxn passed as an argument to another function
console.log("forEach function example!")
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val){
    console.log(val);
})

console.log("forEach using Arrow funtion!");
arr.forEach((val)=>{
    console.log(val);
})

console.log("another way of printing array values");
let printvalue = (num) => {
    console.log(num);
}
arr.forEach(printvalue);

console.log("print elements with it's index");
arr.forEach((val, idx, arr) => {
    console.log(`${val} ---> ${idx}      arr --> ${arr}`);
})

//4) map function --> creates new array with values obtained after applying some operation
console.log("Print double of each element using map funtion");
let newarr = arr.map((val) => {
    return val*2;
});
console.log(newarr);

//5)filter function --> creates  new array of elements that give true for a condition
let newarr1 = arr.filter((val)=>{
    return val%2 === 0;
});
console.log("print only even numbers from array using filter method :",newarr1)

//6)Reduce function
//performs some operation & reduces the array to a single value. It returns that single vale
let curr = 0;          // arr.reduce(accumulator, currentValue)
let output = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("Sum of array elements using reduce fxn : ",output);

//Print largest number from array
const large = arr.reduce((prev, curr) => {
    if(prev>curr) return prev;
    else return curr;
});
console.log("Largest number from array is :",large);