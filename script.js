/* console.log("Hello World"); */

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice())

function getHumanChoice() {
    const choice = prompt("Choose rock, paper, or scissors:");
  return choice;
}

let HumanChoice = getHumanChoice();

console.log("Playerpicked:", HumanChoice)

function result() {
  const computerChoice = getComputerChoice();

    if (HumanChoice === getComputerChoice()) {
    return "It is a tie"
}
else if (
    (HumanChoice === "rock" && computerChoice === "scissors") ||
    (HumanChoice === "paper" && computerChoice === "rock") ||
    (HumanChoice === "scissors" && computerChoice === "paper")
) {
    return "You win!";
} else {
    return "You lose!";
}
}

console.log(result())