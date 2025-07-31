// NOTE: Strings are immutable in JS that is you have to create new string to store changed version of any string

//---> Strings
//Creation
let str = "Rutuja";
let strn = "ApnaCollege";

//Length
console.log("Length of string Rutuja is :",str.length);
console.log("Length of string ApnaCollege is :",strn.length);

//Indices of strings
console.log("First character of string Rutuja is :",str[0]);
console.log("last character of string Rutuja is :",str[str.length-1]);


//-----------------------------------------------------------------------------------------
//---> Template literals(it's a special type of string, work as f" " string in python)
//if we wanted to print the variavles value in the answer then we can directly print using ${} this in the `` 
let obj = {
    item: "Pen",
    price: 10,
};
console.log(obj);
console.log("The price of",obj.item,"is",obj.price,"rupees");
//so here we have to write comma again and again to print object values so instead use template literals

let output = `The price of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log(`type of output is ${typeof(output)}.`)
//or --> console.log(`The price of ${obj.item} is ${obj.price} rupees`)

console.log(`we can also use expression inside template literals for ex.(1+2+3) = ${1+2+3}`);


//-----------------------------------------------------------------------------------------
//---> Escape characters (used to print on next line or for tab space)
//1)next line --> \n
console.log("example for next line character");
console.log("hey\nhello");

console.log("example for tab operation");
console.log("hey\thello");

//NOTE: \t and \n are considered as one character even if they have two characters in it


//-----------------------------------------------------------------------------------------
//---> String Methods
let newstr = "   Hello Rutuja "
console.log("newstr =",newstr);
console.log("Uppercase of newstr is :",newstr.toUpperCase());
console.log("Lowercase of newstr is :",newstr.toLowerCase());
console.log("Remove the leading and ending spaces :",newstr.trim());
console.log("slice method (gives part of string)");
console.log("slice of newstr from index 3 to 6 :",newstr.slice(3,7)); //slice.str(start, end) --> end is exclusive that is end index will not print 

let str1 = "hello";
let str2 = "World";
console.log("joining two strings together : ", str1.concat(str2));
console.log("replace ello of hello by i :",str1.replace("ello","i"));  //str.replace(searchval, newval)
console.log("Access 3rd character in hello :",str1.charAt(2)); //str.charAt(index)





