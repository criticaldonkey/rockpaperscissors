

// respond to submit button
document.getElementById("buttonholder").addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    console.log("Player choice: " + playerChoice);
    results = compareResults(computerChooser(), playerChoice);
    console.log(results);
    announceResults(results);
    }
);
let gamecount = 0;
let computerscore = 0;
let playerscore = 0;


// function to generate a random choice. 
function computerChooser() {
    let numerical = Math.floor(Math.random()*3);
    switch (numerical) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }

}
// function to restart game. 
// clear the computer choice variable
// rerun the random generator
// iterate

function compareResults(computer, player) {
    
        console.log("choices: (computer, player)" + computer + " " + player);
        if (computer === player) {
            return ["tie", computer, player];
        } else if (computer=="rock" && player=="scissors") {
            return ["win", computer, player];
        } else if (computer=="scissors" && player=="paper") {
            return ["win", computer, player];
        } else if (computer=="paper" && player=="rock") {
            return ["win", computer, player];
        } else {
            return ["lose", computer, player];
        }
    }
   

function announceResults(results) {
    let resultpara = document.querySelector("#gameresult");
    if (results[0] === "tie") {
        console.log(`It's a tie! You both chose ${results[1]}!`);
        resultpara.textContent = `The computer chose ${results[1]}...It's a tie! You both chose ${results[1]}!`;
    } else if (results[0] === "win") {
        console.log(`Computer wins! ${results[1]} beats ${results[2]}!`);
        resultpara.textContent = `The computer chose ${results[1]}...Computer wins! ${results[1]} beats ${results[2]}!`;
        computerscore++;
        document.getElementById("computer").textContent = computerscore;
    } else if (results[0] === "lose") {
        console.log(`You win! ${results[2]} beats ${results[1]}!`);
        resultpara.textContent = `The computer chose ${results[1]}...You win! ${results[2]} beats ${results[1]}!`;
        playerscore++;
        document.getElementById("player").textContent = playerscore;
    } else {
        console.log("error");
    }
}

// function autoplay() {
//     for (let i = 0; i < 5; i++) {
//         announceResults();
//     }
// }

// function victory message(answerchecker)
// if check return = win, sorry person you lose
// else if check return = lose, yay person you win
// else if check return = tie, Its a tie!


