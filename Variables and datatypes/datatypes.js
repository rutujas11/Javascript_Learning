//Primitive datatypes
let age = 24;
console.log("age = ",age);
console.log("data type of age : ",typeof(age));

let price = 24.44;
console.log("price = ",price);
console.log("data type of price : ",typeof(price));

let fullname = "Rutuja Shete";
console.log("fullname = ",fullname);
console.log("Data type of fullname : ",typeof(fullname));

let isfollow = true;
console.log("Data type of isfollow : ",typeof(isfollow));

let x;
console.log("data type of let x; is ",typeof(x));

let z = null;
console.log("data type of z = null is ",typeof(z));

//Non primitive datatypes
//1) Objects

const student = {
    myname : "Rutuja Shete",
    myage : 21,
    cgpa : 9.22,
    ispass : true,
};
console.log(student);
console.log("Type of student : ",typeof(student));
console.log(student["myname"]);
console.log(student.cgpa);
student["cgpa"] = student["cgpa"]+1;
console.log("cgpa increased by one : ",student["cgpa"]);
student["age"] = 21;


//Practice code1
const product = {
    title : "Ball Pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);

//practice code 2
const profile = {
    username : "Rutuja Shete",
    posts : 195,
    followers : 569,
    following : 4,
    isfollow : true,
};
console.log(profile);