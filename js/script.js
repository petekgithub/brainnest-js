// const choices = ['rock','paper','scissors'];
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');


function click() {
  return playRound();
}


function randomInteger(max, min = 0) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

function getRandomChoice() {
  return choices[randomInteger(choices.length)-1];
}

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

function getResult(player1, player2) {
  const battleMap = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if(player1 === player2) {
    return 'tie';
  }

  if (battleMap[player1] === player2) {
    return 'win';
  } else {
    return 'lose';
  }

}

function getMessage() {
  const messages = {
    tie: () => `It's a tie!`,
    win: (player1, player2) => `You win! ${player1} beats ${player2}`,
    lose: (player1, player2) => `You lose! ${player2} beats ${player1}`
  };

  return messages[result](player1, player2);
}


function playRound(input) {

      const player1 = sanitize(input);
      const player2 = getRandomChoice();
  
      validate(player1);
  
      const result = getResult(player1, player2);
      const message = getMessage(result, player1, player2);
  
      return {
        result,
        message
      };
}

function game() {
  const scores = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  //----------------------------(1)--------------------------------------------------//
  const numberOfRounds = 5;
  for(let i = 0; i < numberOfRounds; i += 1) {
    // const input = prompt('Please enter one of these: rock, paper or scissors')

    // event listeners
    


    const { result, message } = playRound(input);

    if (result === 'win') {
      scores.wins += 1;
    } else if (result === 'lose') {
      scores.losses += 1
    } else{
      scores.ties += 1
    }

    console.log(message);
  }

  console.log(`You won: ${scores.wins}, Computer won: ${scores.losses} and Tie: ${scores.ties} `)

}