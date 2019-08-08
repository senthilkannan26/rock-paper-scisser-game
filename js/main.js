// GET DOM ELEMENTS
const resetbtn = document.getElementById("resetbtn");
const results = document.querySelector(".results");
const choices = document.querySelectorAll(".choice");
const model = document.querySelector(".model");
const modelContent = document.querySelector(".model-content");

const scoreBord = {
  player: 0,
  computer: 0
};

function playGame(e) {
  resetbtn.style.display = "inline-block";
  const playerchoice = e.target.id;
  const computerchoice = getComputerchoice();
  const winner = getWinner(playerchoice, computerchoice);
  showWinner(winner, computerchoice);
}

//  GET COMPUTER CHOICE
function getComputerchoice() {
  const ran = Math.random();
  if (ran < 0.33) {
    return "rock";
  } else if (ran < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// GET WINNER
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// DISPLAY WHO IS WINNER
function showWinner(winner, computerchoice) {
  model.style.display = "block";
  // insert into model content elements
  if (winner === "draw") {
    modelContent.innerHTML = `
      <h3>It's a draw :)</h3>
      <i class="fas fa-hand-${computerchoice} fa-10x"></i>
      <p>Computer Chose ${computerchoice.charAt(0).toUpperCase() +
        computerchoice.slice(1)}</p>
    `;
  } else if (winner === "player") {
    scoreBord.player++;
    modelContent.innerHTML = `
      <h3 class=player>You Win :)</h3>
      <i class="fas fa-hand-${computerchoice} fa-10x"></i>
      <p>Computer Chose ${computerchoice.charAt(0).toUpperCase() +
        computerchoice.slice(1)}</p>
    `;
  } else {
    scoreBord.computer++;
    modelContent.innerHTML = `
      <h3 class=computer>You Lose :(</h3>
      <i class="fas fa-hand-${computerchoice} fa-10x"></i>
      <p>Computer Chose ${computerchoice.charAt(0).toUpperCase() +
        computerchoice.slice(1)}</p>
    `;
  }
  showResult();
}

function showResult() {
  results.innerHTML = `
    <p>Player score : ${scoreBord.player}</p>
    <p>Computer score : ${scoreBord.computer}</p>
  `;
}

function closeModel(e) {
  if (e.target == model) {
    model.style.display = "none";
  }
}

function resetScorebord() {
  resetbtn.style.display = "none";
  scoreBord.player = 0;
  scoreBord.computer = 0;
  results.innerHTML = `
    <p>Player score : 0 </p>
    <p>Computer score : 0 </p>
  `;
}

// loop through choisces AND ADD EVENT LISTENER
choices.forEach(coice => coice.addEventListener("click", playGame));
window.addEventListener("click", closeModel);
resetbtn.addEventListener("click", resetScorebord);
