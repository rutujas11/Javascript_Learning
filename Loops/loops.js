//----> 1) For Loop

for(let i = 1;i<=5;i++){
    console.log("hello!");
}
console.log("Loop has ended!")

//Calculate sum of 1 to n
// let sum = 0;
// let num = prompt("Enter the number!");
// for(let i = 1;i<=num;i++){
//     sum += i;
// }
// console.log("Adiition of first",num,"number is :",sum);

//------------------------------------------------------------------------------------
//----> 2) while loop
let i = 5;
while(i<=10){
    console.log("i =",i);
    i++;
}

//------------------------------------------------------------------------------------
//----> 3)do-while loop
let j = 1;
do{
    console.log("j =",j);
    j--;
}while(j>1);

//------------------------------------------------------------------------------------
//----> 4)For-of loop (it is like for(int num : arr) in java) (for accessing each element in array or string)
let str = "Rutuja";
let size = 0;
for(let s of str){
    console.log(s);
    size++;
}
console.log("length of string is :",size);

//------------------------------------------------------------------------------------
//----> 4)For-in loop (it is used for objects for accessing keys)
let student = {
    name: "Rutuja",
    age: 21,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student){
    console.log("Key =",key, " ----> value=",student[key]);
}
