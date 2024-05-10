let you = 0;
let comp = 0;
const user = document.querySelector("#user-c");
const com = document.querySelector("#comp-c");

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("h2");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return options[idx];
};

const draw = () => {
  console.log("match was draw");
  result.innerHTML = "Match is draw";
  result.style.backgroundColor = "hsl(60, 73%, 53%)";
};

const showWinner = (userWin, userChoice, getCompChoice) => {
  if (userWin) {
    console.log(`You win ${userChoice} beats ${getCompChoice}`);
    result.innerHTML = `You win  ${userChoice} beats ${getCompChoice}`;
    result.style.backgroundColor = "green";
    you++;
    user.textContent = you;
  } else {
    console.log(`You lose  ${userChoice} beats ${getCompChoice}`);
    result.innerHTML = `You lose  ${getCompChoice} beats ${userChoice}`;
    result.style.backgroundColor = "red";
    comp++;
    com.textContent = comp;
  }
};

const gameplay = (userChoice) => {
  console.log(`user choice = ${userChoice}`);
  //    computer choice

  const getCompChoice = compChoice();
  console.log(`comp choice = ${getCompChoice}`);

  if (userChoice === getCompChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = getCompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = getCompChoice === "scissors" ? false : true;
    } else {
      userWin = getCompChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, getCompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gameplay(userChoice);
  });
});
