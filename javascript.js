let humanScore = 0;
let computerScore = 0;
// moved out of playGame to the top
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');
const resetButton = document.getElementById('reset');

function getComputerChoice(){
    let x = Math.random();
    if (x <= 0.3333333333){
        return 'rock';
    } else if (x <= 0.6666666666){
        return 'paper';
    } else {
        return 'scissors';
    }
}

// no need for getHumanChoice anymore

function playRound(humanChoice, computerChoice){
    // draw = 1, lose = 2, win = 3
    if (humanChoice === computerChoice){
        return 1;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        return 3;
    } else {
        return 2;
    };
};

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    let message = `You chose ${humanChoice}, Computer chose ${computerChoice}.\n`;

    if (result === 1){
        message += 'It\'s a draw!';
    };
    if (result === 2){
        computerScore ++;
        message += 'Computer wins this round!';
    };
    if (result === 3){
        humanScore ++;
        message += 'You win this round!';
    };

    resultsDiv.textContent = message;
    scoreDiv.textContent = `Computer score: ${computerScore} | Human score: ${humanScore}`;
    checkWinner();
};

function checkWinner() {
    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore) {
            winnerDiv.textContent = `YOU WON THE GAME! CONGRATULATIONS!\n SCORE: ${humanScore}`
        } else if (computerScore > humanScore){
            winnerDiv.textContent = `COMPUTER WON THE GAME! MORE LUCK NEXT TIME!\n SCORE: ${computerScore}`
        } else {
            winnerDiv.textContent = 'THE GAME ENDED UP IN A TIE!'
        };

        // disable all buttons
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        resetButton.style.display = 'block';
    };
};

function reset(){
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = '';
    winnerDiv.textContent = '';
    document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = false);
    resetButton.style.display = 'none';
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
resetButton.addEventListener('click', reset);
// Hide reset button at the start
resetButton.style.display = 'none';
scoreDiv.textContent = `Computer score: ${computerScore} | Human score: ${humanScore}`;
