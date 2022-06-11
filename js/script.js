// Game choices
// const choices = document.querySelectorAll('.choice');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restartButton = document.getElementById('restart');
const playButton = document.querySelector(".play-btn");

//Game display 
const score = document.getElementById('score');
const result = document.getElementById('result');
const modal = document.querySelector('.modal');


// Beginner score values
const scoreboard = {
  playerScore: 0,
  computerScore: 0
};

const choices = ['rock', 'paper', 'scissors'];

// Get computers choice
function getComputerChoice() {
  return choices[randomInteger(choices.length)-1];
}
function randomInteger(max, min = 0) {
  return Math.floor(Math.random()*(max-min+1))+min;
}


// Validation control
function sanitize(input) {
  return input.trim().toLowerCase()
}

function validate(input) {
  const errors = [];
  if(!input) {
    errors.push('Input must not be empty')
  }
  if(!choices.includes(input)) {
    errors.put('Input must be one of the following: rock, paper or scissors')
  }
  if(errors.length) {
    throw new Error(errors.join(', '))
  }
}


// Play game
function playRound(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = playGame(playerChoice, computerChoice);
  showWinner(winner, computerChoice);

  const playerTurn = sanitize(input);

  validate(playerTurn);
  // playGame();
}


// Get game winner
const playGame = (playerSelection, computerSelection) => {
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
      return "Tie!";
  }
  if(playerSelection.toLowerCase() === "paper" ){
      if(computerSelection.toLowerCase() === "rock"){
          scoreboard.playerScore++;
          return `You Win! ${playerSelection} beats ${computerSelection}`;
      }
      else{
          scoreboard.computerScore++;
          return `You Lose! ${computerSelection} beats ${playerSelection}`;

      }
  }
  else if(playerSelection.toLowerCase() === "rock"){
      if(computerSelection.toLowerCase() === "scissors"){
          scoreboard.playerScore++;
          return `You Win! ${playerSelection} beats ${computerSelection}`;
      }
      else{
          scoreboard.computerScore++;
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
      }
  }
  else if(playerSelection.toLowerCase() === "scissors"){
      if(computerSelection.toLowerCase() === "paper"){
          scoreboard.playerScore++;
          return `You Win! ${playerSelection} beats ${computerSelection}`;
      }
      else{
          scoreboard.computerScore++;
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
      }
  }
}


const showWinner = (playerMove) => {
  if(scoreboard.playerScore === 5){
          result.innerHTML = `
          <h1 class="text-win>You Win!</h1>
          <i class="fas fa-hand-${scoreboard.computerScore} fa-10x"></i>
          <p>Computer chose <strong>${scoreboard.computerScore}</strong></p>
          `;
          restartButton.classList.remove("disappear");
          return;

  }else if(scoreboard.computerScore === 5){
          result.innerHTML = `
          <h1 class="text-lose>You Lose!</h1>
          <i class="fas fa-hand-${scoreboard.computerScore} fa-10x"></i>
          <p>Computer chose <strong>${scoreboard.computerScore}</strong></p>
          `;
          restartButton.classList.remove("disappear");

  }else {
    if(scoreboard.playerScore <= 4 && scoreboard.computerScore <= 4){
        const computerMove = getComputerChoice();
        const gameResult = playGame(playerMove, computerMove);
       result.innerHTML = `
          <h1>It's a Tie!</h1>
          <i class="fas fa-hand-${scoreboard.computerScore} fa-10x"></i>
          <p>Computer chose <strong>${scoreboard.computerScore}</strong></p>
          `;
          restartButton.classList.remove("disappear");
    }
  }

  // Show score
  score.innerHTML=`
    <p>Player: ${scoreboard.playerScore}</p>
    <p>Computer: ${scoreboard.computerScore}</p>
  `;

  modal.style.display = 'block';

}


// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// Event listeners
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
// choices.forEach((choice) => choice.addEventListener('click',playRound));

rock.addEventListener("click", () => {
  showWinner("rock");
});

paper.addEventListener("click", () => {
  showWinner("paper");
});

scissors.addEventListener("click", () => {
  showWinner("scissors");
});

// playButton.addEventListener("click",(e) => {
//   startGame();
// });

