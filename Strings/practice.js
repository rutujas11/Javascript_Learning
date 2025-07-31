//Q1. Prompt the user to enter their full name. generate a username for tem based on the input. Start username with @, followed by their full name and ending with the fullname length.
// e.g: user name = "rutujashete", username should be "@rutujashete11"

let user = prompt("Enter your full name please!");
console.log(`Username created using template literals : @${user}${user.length}`);

let username = "@"+user+user.length;
console.log("Username created using concatenation :",username);


