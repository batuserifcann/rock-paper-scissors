let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    roundWinner = "tie";
  }
  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoresText(roundWinner, playerChoice, computerChoice);
}

function getRandomChoice() {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
}

const playerSign = document.querySelector("#playerSign");
const playerScoreCard = document.querySelector("#playerScore");

const computerSign = document.querySelector("#computerSign");
const computerScoreCard = document.querySelector("#computerScore");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");

rockBtn.addEventListener("click", () => handleChoice("ROCK"));
paperBtn.addEventListener("click", () => handleChoice("PAPER"));
scissorsBtn.addEventListener("click", () => handleChoice("SCISSORS"));

function handleChoice(playerChoice) {
  let compSelection = getRandomChoice();
  if (endGame()) {
    alert("Game  is over");
  }
  updateChoices(playerChoice, compSelection);
  playRound(playerChoice, compSelection);
  updateScore();
}

function updateChoices(playerChoice, compSelection) {
  switch (playerChoice) {
    case "ROCK":
      playerSign.textContent = "✊";
      break;
    case "PAPER":
      playerSign.textContent = "✋";
      break;
    case "SCISSORS":
      playerSign.textContent = "✌";
      break;
  }
  switch (compSelection) {
    case "ROCK":
      computerSign.textContent = "✊";
      break;
    case "PAPER":
      computerSign.textContent = "✋";
      break;
    case "SCISSORS":
      computerSign.textContent = "✌";
      break;
  }
}
function capitalizeLetter(word) {
  word = word.charAt(0) + word.substring(1).toLowerCase();
  return word;
}

function updateScoresText(roundWinner, playerChoice, compSelection) {
  if (roundWinner === "player") {
    scoreMessage.textContent = `${capitalizeLetter(
      playerChoice
    )} beats ${capitalizeLetter(compSelection)}`;
    return;
  }
  if (roundWinner === "computer") {
    scoreMessage.textContent = `${capitalizeLetter(
      playerChoice
    )} beaten by ${capitalizeLetter(compSelection)}`;
    return;
  }
  scoreMessage.textContent = `${capitalizeLetter(
    playerChoice
  )} tied  by ${capitalizeLetter(compSelection)}`;
  return;
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = `It's a tie`;
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = `You lost`;
  } else if (roundWinner === "player") {
    scoreInfo.textContent = `You won`;
  }

  playerScoreCard.textContent = `Player :  ${playerScore}`;
  computerScoreCard.textContent = `Computer :  ${computerScore}`;
}

function endGame() {
  if (playerScore === 5 || computerScore === 5) {
    return true;
  }
}
