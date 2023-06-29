function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)]
}


function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        {
            return "it is a tie"
        }
    } else if (
        playerSelection === "rock" && computerSelection === "scissor" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper") {
        return "You win"
    }

    return "You lost"
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock", "paper", "scissor");
        let result = oneRound(playerSelection, getComputerChoice());
        console.log(result)
        if (result === "You win") {
            playerScore++;
        } else if (result === "You lost") {
            computerScore++;
        }
    }

    console.log(`Final Score You: ${playerScore} and Computer: ${computerScore}`)
    if (playerScore > computerScore) {
        console.log("You win the game")
    } else if (playerScore < computerScore) {
        console.log("You lost the game")
    } else {
        console.log("it is a tie Nobody wins")
    }

}
game();