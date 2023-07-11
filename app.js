let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");
let body = document.querySelector("body");
let results = document.querySelector(".results");
let scoreEl = document.querySelector(".score");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function oneRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it is a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return "You win";
  }

  return "You lost";
}
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

body.addEventListener("click", function (e) {
  if (e.target == rockBtn || e.target == paperBtn || e.target == scissorBtn) {
    playerSelection = `${e.target.id}`;
    let computerSelection = getComputerChoice();
    let result = oneRound(playerSelection, computerSelection);
    if (result === "You win") {
      playerScore++;
    } else if (result === "You lost") {
      computerScore++;
    } else if (result === "it is a tie") {
      tieCount++;
    }

    let gameCount = playerScore + computerScore + tieCount;
    let winner = "";

    if (playerScore > computerScore) {
      winner = "You win";
    } else if (playerScore < computerScore) {
      winner = "You lost";
    } else {
      winner = "it's a tie Nobody wins";
    }

    if (gameCount === 5) {
      results.innerText = `Game Over!! Final Score You: ${playerScore} and Computer: ${computerScore} 
      ${winner}`;
      rockBtn.setAttribute("disabled", "true");
      paperBtn.setAttribute("disabled", "true");
      scissorBtn.setAttribute("disabled", "true");
      scoreEl.remove();
    } else {
      results.innerText = `Your choice: ${playerSelection} and Computer choice: ${computerSelection} "${result}" `;
      scoreEl.textContent = `Score You: ${playerScore} and Computer: ${computerScore}`;
    }
  }
});
