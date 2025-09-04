//try-catch block
//Syntax : try{
//           ...normal code
//         }catch(err){    ---> err = error object
//            ..handling error  
//         }

let a = 5;
let b =10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a+b);
try{
    console.log("a + b = ",a+c);
}catch(err){
    console.log("error in this line :",err);
}
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);