'use strict';

let score = 20;
let highScore = 0;
//Defining a secret(Random) secretNumber berteen 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no guess
  if (!guess) {
    displayMessage('⚠️ No Number');
  }
  //When player guesses the right number
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage(' You lost the game');
    }
  }
});

//Again Button implemenatation
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
