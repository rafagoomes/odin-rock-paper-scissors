//Computer Play
const options = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const selectedOption = Math.floor(Math.random() * options.length);
    //console.log(options[selectedOption]);
    return options[selectedOption];
}
//Play round
function playRound(computerSelection, playerSelection) {

    if (playerSelection === '' || playerSelection !== options) {
        return `Wrong selection, please select any of ${options}`;
    } else {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You lose! Paper beats rock."
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper beats rock."
        } else if (playerSelection === 'rock' && computerSelection === 'rock'){
            return `Draw - ${playerSelection} x ${computerSelection}`;
        }
        if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You lose! Rock beats scissors."
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rock beats scissors."
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
            return `Draw - ${playerSelection} x ${computerSelection}`;
        } 
        if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return "You lose! Scissor beats paper."
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissor beats paper."
        } else if (playerSelection === 'paper' && computerSelection === 'paper'){
            return `Draw - ${playerSelection} x ${computerSelection}`;
        }
    }
}
//Play game of 5 rounds
function game() {
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt("Type one of the options - Scissors, Paper or Rock;");
        console.log(playRound(computerPlay(), playerSelection.toLowerCase()));
    }
}
game();
