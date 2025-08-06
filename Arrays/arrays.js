//Creation
let marks = [78, 87, 89, 90, 40];
console.log(marks);

//length of array
console.log("Length of array marks :",marks.length);

//type of array
console.log("Array datatype is :",typeof(marks));

//Accessing elements with 0-based indexing
console.log("marks of 3rd student is :",marks[2]);

//Updating array elements
marks[3] = 100;
console.log(`new updated marks: [${marks}]`);

//Print array elements using loop
let heroes = ["hulk", "spiderman","ironman"];
console.log("Print array elements using loop:")
for(let i = 0;i<heroes.length;i++){
    console.log(heroes[i]);
}

//-------------------------------------------------------------------------
// Array Methods

//push()--> adds element at the end of array
marks.push(100);
console.log("Array after adding element using push():",marks);

//pop() --> deletes end element and returns
console.log("Deleted last element is:",marks.pop());

//toString()--> converts data into string
let letters = ['r','u','t','u','j','a'];
console.log("letters",letters);
console.log("type of letters array:",typeof(letters));
console.log("array converted to string:",letters.toString());
console.log("type of letters after converting to string:",typeof(letters.toString()));

//concat() --> joins multiple arrays and returns result
let mixture = marks.concat(letters);
console.log("Array after joining marks and letters:",mixture);

//unshift() --> adds element to start
letters.unshift("hi");
console.log("letters array after unshift:",letters);

//shift() --> deletes element from start and returns it
console.log("deleted element using shift:",letters.shift());

//slice(startIdx, endIdx(exclusive)) --> returns piece of the array
console.log("slice on letters:",letters.slice(-2)); 

//splice(startIdx, delCount, newElement);
arr1 = [1,2,3,4,5,6,7,8];
//go to index 2 delete 2 elements and replace it by 11, 22
arr1.splice(0, 2, 11, 22);
console.log(arr1);
//insert 100 at index 3 without deleting anything
arr1.splice(3,0, 100);
console.log(arr1);
//delete element from index 3
arr1.splice(3,1);
console.log(arr1);
//delete all elements after specific index
arr1.splice(4);
console.log(arr1);
