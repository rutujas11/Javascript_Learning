//Practice 1 (print all even numbers from 0 to 100.)
console.log("All even numbers from 0 to 100");
for(let i = 0;i<=100;i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//practice 2 
// (create game where you startwith any random game number. ask the user to keep guessing the game number until user enters correct correct value)
let gameNumber = 11;
let guess = prompt("Guess the number");
while(guess != gameNumber){
    guess = prompt("You guessed the wrong number :(, Please give it a one more chance!!");
}
console.log("Wohhh! you guessed the correct number:))");