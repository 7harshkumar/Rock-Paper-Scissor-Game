let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

function draw() {
    let msg = document.querySelector(".msgBox");
    msg.innerText = 'Draw! Try Again!';
    msg.style.backgroundColor = "#364652";
}

function showWinner(userChoice, compChoice) {
    let msg = document.querySelector(".msgBox");
    if (userChoice === compChoice) {
        draw();
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

function playGame(userChoice) {
    const compChoice = genCompChoice();
    showWinner(userChoice, compChoice);
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function genCompChoice() {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
