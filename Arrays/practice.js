//Q1. for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// find average marks of the entire class

let mark = [85,97,44,37,76,60]
console.log("Marks of students -->",mark);
let sum = 0;
for(let num of mark){
    sum += num;
}
console.log("Average of marks:",sum/mark.length);

//Q2. For a given array with prices of 5 items->[250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250,645,300,900,50];
console.log("Prices of item :",prices);
for(let i=0;i<prices.length;i++){
    prices[i] = prices[i] - prices[i]*0.1;
}
console.log("Prices with 10% discount on prices :",prices);


//Q3.create array to store companies and do following operations
//a)remove first company from array
//b)remove uber and add ola in its space
//c)add amazon at the end

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflx"]
console.log("Array Comapany --->",company);
console.log("remove first company from array:",company.shift());
console.log(company);

company.splice(1,1,"Ola");
console.log("remove uber and add ola in its space:",company)

company.push("Amazon");
console.log("add amazon at the end:",company);