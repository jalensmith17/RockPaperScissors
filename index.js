let gameChoice = [
    'Rock',
    'Paper',
    'Scissors'
]

function getComputerChoice(){
    let result = gameChoice[(Math.floor(Math.random() * gameChoice.length))];{

        return result;
    }

}


function playRound(playerSelection, computerSelection){
    let log = '';
    
   if(playerSelection === "Rock"){
    if(computerSelection === 'Paper') {
        log = "You lose! Paper beats Rock.";
    } else if (computerSelection === "Scissors"){
        log = "You win! Rock beats Scissors.";
    } else {
        log = "It's a tie.";
    }
   }

   else if(playerSelection === "Paper"){
    if(computerSelection === 'Scissors') {
        log = "You lose! Scissors beats Paper.";
    } else if (computerSelection === "Rock"){
        log = "You win! Paper beats Rock.";
    } else {
        log = "It's a tie.";
    }
   }

   else if(playerSelection === "Scissors"){
    if(computerSelection === 'Rock') {
        log = "You lose! Rock beats Scissors.";
    } else if (computerSelection === "Paper"){
        log = "You win! Paper beats Rock.";
    } else {
        log = "It's a tie.";
    }
   }
   
   return log;
}

const playerSelection = window.prompt("Choose your fighter!");
const computerSelection = getComputerChoice();


function myGame(playerSelection, computerSelection) {
    console.log(playRound(playerSelection,computerSelection));
  }


myGame(playerSelection, computerSelection);
console.log(playerSelection);
console.log(computerSelection);

//helper functions
//console.log(playRound(playerSelection, computerSelection));
//console.log(playerSelection);
//console.log(computerSelection);
//console.log(gameChoice[(Math.floor(Math.random() * gameChoice.length))]);

