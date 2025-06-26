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

function getHumanChoice(){
    let y = prompt('rock, paper, or scissors? ').toLowerCase();
    return y;
}

function playRound(humanChoice, computerChoice){
    let result;

    /* draw = 1, lose = 2, win = 3 */
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock'){
            result = 1;
        } else if (computerChoice === 'paper'){
            result = 2;
        } else {
            result = 3;
        }
    };

    if (humanChoice === 'paper'){
        if (computerChoice === 'paper'){
            result = 1;
        } else if (computerChoice === 'scissors'){
            result = 2;
        } else {
            result = 3;
        }
    };

    if (humanChoice === 'scissors'){
        if (computerChoice === 'scissors'){
            result = 1;
        } else if (computerChoice === 'rock'){
            result = 2;
        } else {
            result = 3;
        }
    };

    console.log(`your choice: ${humanChoice} \ncomputer choice: ${computerChoice}`);

    return result;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice(); // ask user
        const computerSelection = getComputerChoice(); // random pick
        const result = playRound(humanSelection, computerSelection); // compare choices with the new variables created above

        if (result === 1){
            console.log('it\'s a draw!');
        }
        if (result === 2){
            computerScore ++;
            console.log('computer win!');
        }
        if (result === 3){
            humanScore ++;
            console.log('you win!');
        }
    
        console.log(`computer score: ${computerScore} \nhuman score: ${humanScore}`);
    }

    if (humanScore > computerScore){
        console.log('\nyou won the game! congratulations!');
    } else if (computerScore > humanScore){
        console.log('\nthe computer won the game! more luck next time!');
    } else {
        console.log('\nthe game ended up in a tie!');
    }
}

playGame();