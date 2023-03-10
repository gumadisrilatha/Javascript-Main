const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = playRound();
  })
);

function computerPlay() {
  const randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      computer = "ROCK";
      break;
    case 1:
      computer = "PAPER";
      break;
    case 2:
      computer = "SCISSORS";
      break;
  }
}

function playRound() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}

function gamePlay() {
  for (let i = 0; i <= 5; i++) {
    var player = prompt("Enter Rock, Paper or Scissors");
    let computer = computerPlay();
    console.log(playRound(player.toLowerCase(), computer));
  }
}

gamePlay();
