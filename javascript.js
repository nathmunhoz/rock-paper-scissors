let humanScore = 0;
let computerScore = 0;
// moved out of playGame to the top
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

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

    let message = `you chose ${humanChoice}, computer chose ${computerChoice}. `;

    if (result === 1){
        message += 'it\'s a draw!';
    };
    if (result === 2){
        computerScore ++;
        message += 'computer wins this round!';
    };
    if (result === 3){
        humanScore ++;
        message += 'you win this round!';
    };

    scoreDiv.textContent = `computer score: ${computerScore} \nhuman score: ${humanScore}`;

    resultsDiv.textContent = message;

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
    };
};

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));