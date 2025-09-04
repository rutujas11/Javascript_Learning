const student = {
    fullName: "Shradha Khapra",
    marks: 94.4,
    printMarks: function() {
        console.log("marks = ", this.marks);
    },
};


//----> Prototype  
        // A JS object is an entity having state and behaviour(properties and methods).
        // JS objects have a special property called prototype
        // we can set prototyping using __proto__
        // NOTE: If object & prototype have same methid, object's method will be used
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
    // another way of defining function
    // calctax2: function () {
    //     console.log("tax rate is 100%");
    // }
};

const karanArjun = {
    salary: 50000,
    calcTax(){
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;

//====================================================================================================================
//----> Classes
        // Class is a program-code template for creating objects
        // Those objects will have some state(variables) & some behaviour(functions) inside it. 
        // Demo :   class MyClass{
        //             constructor(){....}                 
        //             myMethod(){....}
        //          }
        //          let myObj = new MyClass();


//----> Constructor
       // it's a method
       // automatically invoked by new class
       // initializes objects
       // demo: class demo{
       //            constructor() {...}  
       //       }
class ToyotaCar {
    //Constructor
    constructor(brand, mileage){               
        console.log("creating the object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("Stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
    getBrand(){
        console.log("brand name is : ",this.brand);
        console.log("mileage is : ", this.mileage);
    }
};

let fortuner = new ToyotaCar();    //fortuner ===> object of class ToyotaCar  //constructor will be called
fortuner.setBrand("fortuner model 25");

let rangeRover = new ToyotaCar(21); //rangeRover ===> object of class ToyotaCar    //constructor will be called
rangeRover.setBrand("Tata Motors");

    
//====================================================================================================================
//----> Inheritance
        class parent{}
        //class child extends parent{}
        //NOTE: if child & parent have same method, child's method will be used (method overriding)

// Example 1
class Parent {
    hello() {
        console.log("hello ");
    }
}

class Child extends Parent {
      
}

let obj = new Child(); //object of child class, but if we call parent function using this obj it will work
 
//Example 2
class person {
    constructor(name){
        console.log("Into parent constructor");
        this.species = "homo sapiens";
        this.name = name;
        console.log("exit parent constructor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
    //below function is defined in child class also so when we invoke this function using child obj it will invoke child function and not this 
    work(){              
        console.log("do nothing");
    }
}

class Engineer extends person{
    constructor(branch, name){
        console.log("Into child constructor");
        //calling parent class constructor
        super(name); //everytime when we create constructor in child class, first invoke parent(super) class using super word
        this.branch = branch;
        this.name = name;
        console.log("exit child constructor");
    }
    work(){
        //invoking method of parent class using "super" word
        super.eat();
        console.log("Code and build something");
        super.sleep();
    }
}

class doctor extends person{
    work(){
        console.log("treat patients");
    }
}
let engObj = new Engineer("chemical","rutuja");
// let docObj = new doctor();
// let perObj = new person();  //using this obj work() funtion will invoke "do nothing" vala work function
