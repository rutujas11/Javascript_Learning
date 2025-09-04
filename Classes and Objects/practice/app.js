//Q1) you are creating a website for your college. create a class User with 2 properties, name 
//    & email. It also has a method called viewData() that allows user to view website data

let Data = "secret information";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Website data = ",Data);
    }
}

//Q2) Create a new class called Admin which inherits from User. 
//    Add a new method called editData to Admin that allows it tot edit website data
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        Data = "some new value";
    }
}

let stu1 = new User("sanika", "abc11@gmail.com");
let stu2 = new User("rutuja", "xyz12@gmail.com");
let teacher1 = new User("Dean", "dean13@gmail.com");

let admin = new Admin("admin", "admin@college.com");