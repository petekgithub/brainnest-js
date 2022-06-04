

function computerPlay() {
  const choice = ['rock','paper','scissors'];
  return choice[Math.floor(Math.random()*choice.length)]
}


function playOneRound(playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    return "It's a tie!"
  }

  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }

  else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } 
  
  else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  }
  else {
    return `You lost! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;

  }

}

function game() {  

  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter one of these: rock, paper or scissors")
    const computerSelection = computerPlay();
    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);
    console.log(`Final: ${playOneRound(playerSelection, computerSelection)}`);
    console.log("********************");

  }


}

console.log(game());
