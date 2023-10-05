function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie! 🎀";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! 🙌 `;
  } else {
    return `You lose!😔`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  console.log("Rock, Paper, Scissors Game\n");

  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt(
      `Round ${i}:\nYour choice (Rock, Paper, or Scissors): `
    );

    const roundResult = playRound(playerSelection, computerSelection);

    console.log(`💻 : ${computerSelection}`);
    console.log(`🧒 : ${playerSelection}`);
    console.log(`Result: ${roundResult}\n`);

    if (roundResult.startsWith("You win")) {
      playerScore++;
    } else if (roundResult.startsWith("You lose")) {
      computerScore++;
    }
  }

  console.log("Game Over\n");

  if (playerScore > computerScore) {
    console.log("👑👑👑 Congratulations! You won the game! 👑👑👑");
  } else if (playerScore < computerScore) {
    console.log("😞 You lost the game. Better luck next time! 😞");
  } else {
    console.log("It's a tie game. Well played!");
  }
}

// Start the game
game();
