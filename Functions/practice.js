console.log("Practice file starts here........................");
//Q1. Create a function that takes a string as an argument & returns number of vowels in the string
function vowelscnt(str){
    let newstr = str.toLowerCase();
    let count = 0;
    for(const ch of newstr){
        
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            count++;
        }
    }
    console.log("total number of vowels in string is : ",count);
}

vowelscnt("ApnacollEge");


//Q2. same task as above using Arrow function
const countvowels = (str)=>{
    newstr = str.toLowerCase();
    let cnt = 0;
    for(const ch of newstr){
        if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
            cnt++;
        }
    }
    console.log("total number of vowels in string is : ",cnt);
}

//Q3. Print square of each element in given array using forEach loop
let arr1 = [1, 2,3,4,5];
console.log("squares of all array elements")
arr1.forEach((val) => {
    console.log(val**2);
});


//Q4 filter out of the marks of students that scored 90
let marks = [78, 90, 67, 80, 95];
let stud = marks.filter((mark) => {
    return mark >= 90;
});
console.log("Print students with more than 90 marks",stud);

//Q5. 
// i)Take input n as number from user and print 1 to n numbers
let num = prompt("Enter the number");
let numbers = [];
for(let i = 0;i<num;i++){
    numbers[i] = i+1;
}
console.log("numbers ---> ",numbers);
//ii)calculate sum of all numbers in array
const op = numbers.reduce((sum, curr1) => {
    return sum + curr1;
});
console.log("Sum using Reduce function :",op);
//iii)calculate product of all numbers
const prod = numbers.reduce((res, curr2) => {
    return res * curr2;
})
console.log("Product using Reduce function :",prod);