function getComputerChoice() {
    let value = Math.random() * 999;
    let result;

    if(value <= 333) {
        result = 'Rock';
    } else if (value <= 666) {
        result = 'Scissors';
    } else if (value <= 999) {
        result = 'Paper';
    }

    console.log(result);

    return result;
}

function getHumanChoice() {
    let value = prompt('Select your choice - `Rock`, `Paper` or `Sciccors`');
    console.log(value);
    return value;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if(human === 'rock') {
        switch(computer) {
            case 'rock':
                console.log(`It's a Tie! No points given`);
                break;
            case 'paper':
                console.log('You Lost! Paper beats Rock!');
                ++computerScore;
                break;
            case 'scissors':
                console.log('You Won! Rock beats Scissors');
                ++humanScore;
                break;
        }
    } else if (human === 'paper') {
        switch(computer) {
            case 'rock':
                console.log(`You Won! Paper beats Rock`);
                ++humanScore;
                break;
            case 'paper':
                console.log(`It's a Tie! No points given`);
                break;
            case 'scissors':
                console.log('You Lost! Scissors beats Paper');
                ++computerScore;
                break;
        }
    } else if (human === 'scissors') {
        switch(computer) {
            case 'paper':
                console.log(`You Won! Scissors beats Paper`);
                ++humanScore;
                break;
            case 'scissors':
                console.log(`It's a Tie! No points given`);
                break;
            case 'rock':
                console.log('You Lost! Rock beats Scissors');
                ++computerScore;
                break;
        }
    }

    console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);

}

function playGame() {

    for (let round = 1; round <=5; round++) {
        console.log(`Round ${round}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
}

playGame();