//Computer Play
const options = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const selectedOption = Math.floor(Math.random() * options.length);
    //console.log(options[selectedOption]);
    return options[selectedOption];
}
//Document mapping
const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const playerCount = document.querySelector('#playerCount');
const computerCount = document.querySelector('#computerCount');
const roundCount = document.querySelector('#round');
const info_container = document.querySelector('.info-container');

let playerCounter = 0;
let computerCounter = 0;
let drawCounter = 0;
let roundCounter = 0;

playerCount.textContent = playerCounter;
computerCount.textContent = computerCounter;
roundCount.textContent = roundCounter;

function playGame(playerSelection) {
    while (playerCounter < 5 || computerCounter < 5) {
        roundCounter++;
        roundCount.textContent = roundCounter;
        
        let computerSelection = computerPlay();

    if ( playerSelection === computerSelection) {
        return results.textContent = `Draw. ${playerSelection} x ${computerSelection}.`
    }
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'scissors') {
            computerCounter++;
            computerCount.textContent = computerCounter;
            return results.textContent = `Round won by computer - ${computerSelection} beats ${playerSelection}.`
        }
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerCounter++;
            playerCount.textContent = playerCounter;
            return results.textContent = `Round won by player - ${playerSelection} beats ${computerSelection}.`
        }
    } 
}

function checkWinner() {
    let e = document.createElement('div');
    if (playerCounter > computerCounter) {
        e.innerHTML = "You won!";
        e.style.color = 'green';
        e.style.fontWeight = 'bold';
        info_container.appendChild(e);
    } else {
        e.innerHTML = "You lost to Computer!";
        e.style.color = 'red';
        e.style.fontWeight = 'bold';
        info_container.appendChild(e);
    }
}

buttons.forEach(button => button.addEventListener('click', function() {
     playGame(button.value);
     if (playerCounter === 5 || computerCounter === 5) {
        buttons.forEach(button => button.disabled=true);
        checkWinner();
     }
}));