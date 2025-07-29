console.log("-----------------------------------------------------------------------------------------------");
console.log("Operators");
console.log("Learning Operators............")
//----> ARITHMETIC OPERATORS
//1)Binary Operators
console.log("Arithmetic Operators...");
let a = 5;
let b = 10;
console.log("a =",a,"and b =",b);
console.log("a + b =",a+b);
let c = a+b;
console.log("c =",c);
console.log("a - b =",a-b);
console.log("a x b =",a*b);
console.log("a / b =",a/b);
console.log("a % b =",a%b);
console.log("a raised to b =",a**b);

//2)Unary Operators
//increment
a++;
console.log("a increment (a++) =",a); //6
++a;
console.log("++a =",a);
//decrement;
b--;
console.log("b decrement (b--) =",b); //9
--b;
console.log("--b =",b);
console.log("a =",a,"and b=",b);

//-----------------------------------------------------------------------------------

//----> Assignment Operators
let x = 4;
console.log("Assignment Operators...");
console.log("x =",x);
//x += 10 ---> x = x+10
console.log("x += 10 -->",x+=10);

//x -= 10 ---> x = x-10
console.log("x -= 10 -->",x-=10);

//x *= 10 ---> x = x*10
console.log("x *= 10 -->",x*=10);

//x /= 10 ---> x = x/10
console.log("x /= 10 -->",x/=10);

//x %= 10 ---> x = x%10
console.log("x %= 10 -->",x%=10);

//x **= 10 ---> x = x**10
console.log("x **= 10 -->",x**=10);

//-----------------------------------------------------------------------------------

//----> Comparison Operators
console.log("Comaprison Operators...");
let y = 10;
let z = 100;
console.log("Is 10 == 10 :",y==z);
console.log("Is 10 != 10 :",y!=z);

z = "10";
console.log("Is 10 == string 10 :",y==z); //"10" is converted into number and then get compaerd with 10 and return true
//but sometimes we don't want to change datatypes so we can use "===" strict equal to operator

console.log("Is 10 === string 10 :",y===z);
console.log("Is 10 !== string 10 :",y!==z);

z = 100;
console.log("Is 100 >= 10 :",z>=y);
console.log("Is 100 < 10 :",z<y);

//-----------------------------------------------------------------------------------

//----> Logical Operators
console.log("Logical Operators...");
console.log("(10>2) && (11>2) = ",(10>2) && (11>2));
console.log("(10>2) && (1>2) = ",(10>2) && (1>2));
console.log("(10>2) || (1>2) = ",(10>2) || (1>2));
console.log("(0>2) || (1>2) = ",(0>2) || (1>2));
console.log("NOT of true :",!true);
console.log("NOT of false :",!false);
