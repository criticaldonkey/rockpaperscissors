

// floor rand num * 3
// if one then rock
// if two then paper
// if three then scissors
// store to variable as string
// create tries variable = 0
// tries variable++

// respond to sbmit button
const submitter = document.getElementById("submitbutton");
submitter.addEventListener("click", compareResults(computerChooser, playerChooser));


// log player choice
function playerChooser() {
    let chooser = document.getElementById("playerresponse");
    console.log(chooser.value);
    switch (chooser.value) {
        case "choose":
            break;
        case "Rock":
            return "Rock";
            break;
        case "Paper":
            return "Paper";
            break;
        case "Scissors":
            return "Scissors";
    }
}

// function to generate a random choice. 
function computerChooser() {
    let numerical = Math.floor(Math.random()*3);
    switch (numerical) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }

}
// function to restart game. 
// clear the computer choice variable
// rerun the random generator
// iterate

function compareResults(computer, player) {
        if (computer === player) {
            return ["tie", computer, player];
        } else if (computer=="Rock" && player=="Scissors") {
            return ["win", computer, player];
        } else if (computer=="Scissors" && player=="Paper") {
            return ["win", computer, player];
        } else if (computer=="Paper" && player=="Rock") {
            return ["win", computer, player];
        } else {
            return ["lose", computer, player];
        }
    }
   


// function victory message(answerchecker)
// if check return = win, sorry person you lose
// else if check return = lose, yay person you win
// else if check return = tie, Its a tie!

