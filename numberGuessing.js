const prompt = require('prompt-sync')({sigint: true});
 
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 10) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
console.log("---------------------------------");
console.log("This is a number guessing game!!!");
console.log("---------------------------------");
console.log("Guess a number between 1- 100");

let choice = 'Y';
while(choice == 'Y'){
  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    // const name = prompt(' What is your name');
    // console.log('Hey there ${name}');
    
    // Prompt user to enter only valid number for validation purposes
    input = prompt('Guess the number : ');
    while(isNaN(input)){
      console.log("\n");
      console.log("Please enter valid number between 1 - 100");
      input = prompt('Guess the number : ');
    }
    let guess = Number(input);
    // console.log(typeof guess);

    if(guess > numberInMind){
      console.log("\n");
      console.log("Number is too big!"); 
    }
    
    else if(guess < numberInMind){
      console.log("\n");
      console.log("Number is too small!");
      
    }
    else if(guess == numberInMind){
      console.log("YES, THE NUMBER IS CORRECT, YOU WON");
      foundCorrectNumber = true;     
    }

    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
  }
  console.log("Do you want to replay?");
  choice = prompt("Y/N : ");
  // Loop if user input anything else other than Y or N
  while(choice !='Y' &&  choice !='N'){
    console.log("Not a valid input!")
    choice = prompt("Y/N : ");
  }
  
  if(choice == 'Y'){
    numberInMind = Math.floor(Math.random() * 10) + 1;
    foundCorrectNumber = false;
  }
  else if(choice == 'N'){
    console.log("\n");
    console.log("Thanks for playing!");
  }

}




// Bonus Point: prompt user and provide option for user to start a new game after winning