function computerPlay() {
  const choice = ['rock','paper','scissors'];
  return choice[Math.floor(Math.random()*choice.length)]
}


function playOneRound(playerSelection, computerSelection) {

  // invalid input
  if(playerSelection === null || computerSelection === null) {
    return "Invalid input, try again"
  }
  if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ) {
    return "Invalid input, try again"
  }

  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie!"
  }

  if (playerSelection.toLowerCase() === 'rock') {
    if(computerSelection.toLowerCase() === 'scissors') { 
      return `win! ${playerSelection} beats ${computerSelection}`;
    }else {
      return `lost! ${computerSelection} beats ${playerSelection}`;
    }
  }

  if (playerSelection.toLowerCase() === 'paper') {
    if(computerSelection.toLowerCase() === 'rock') { 
      return `win! ${playerSelection} beats ${computerSelection}`;
    }else {
      return `lost! ${computerSelection} beats ${playerSelection}`;
    }
  }

  if (playerSelection.toLowerCase() === 'scissors') {
    if(computerSelection.toLowerCase() === 'paper') { 
      return `win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `lost! ${computerSelection} beats ${playerSelection}`;
    }
  }

}

function game() {  

  let playerWins, computerWins, tie = 0;

  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter one of these: rock, paper or scissors")
    const computerSelection = computerPlay();

    const winner = playOneRound(playerSelection,computerSelection);
    console.log(winner);

    if(winner.includes("win")) {
      playerWins += 1;
    }else if (winner.includes("lost")){
      computerWins +=1;
    } else if(winner.includes("tie")){
      tie +=1;
    }
  }
  console.log(`You won: ${playerWins}, Computer won: ${computerWins} and Tie: ${tie} `)

}

console.log(game());