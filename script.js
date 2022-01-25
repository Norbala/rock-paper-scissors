let compScore = 0;
let userScore = 0;
let compRes;

function computerPlay () {
    let randNum = Math.floor(Math.random()*3);
    if (randNum===0) {
        return "Rock";
    }
    else if (randNum===1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
};



//compRes = computerPlay();
//console.log(compRes);        // so far so good

function singleGame() {             // tutorial je razdvojio userinput u jednu funkciju i if-scoring u drugu funkciju, a u mene je to zajedno
    let userinput = "q";

    while (true) {
        let userinUP = prompt("Enter your choice (Rock, Paper or Scissors): ");
        userinUP = userinUP.toUpperCase();
        let userinLow = userinUP.substring(1).toLowerCase();
        userinput = userinUP[0]+userinLow;
        if (userinput==="Rock" || userinput==="Paper" || userinput==="Scissors") {
            break;
        }
        console.log("Please enter the correct input. Note: you can enter UPPER/lower case.");
    };
    if ((userinput==="Rock"&&compRes==="Rock")||(userinput==="Scissors"&&compRes==="Scissors")||(userinput==="Paper"&&compRes==="Paper")) {
        console.log("It's a tie!");
    };
    if ((userinput==="Rock"&&compRes==="Paper")||(userinput==="Scissors"&&compRes==="Rock")||(userinput==="Paper"&&compRes==="Scissors")) {
        console.log("You lost!");
        compScore++;
    }
    if ((userinput==="Rock"&&compRes==="Scissors")||(userinput==="Scissors"&&compRes==="Paper")||(userinput==="Paper"&&compRes==="Rock")) {
        console.log("You won!");
        userScore++;
    }
};

// singleGame();       // gonna be commented out
let compScore_check = 0;
let userScore_check = 0;
function Game() {
    while (compScore<5||userScore<5) {
        compRes = computerPlay();
        singleGame();
        console.log("Your score: " + userScore + "\nComputer score: " + compScore);

        if (compScore===5) {
            console.log("You got squashed! BUAAHAHA");
            break;
        }
        else if (userScore===5) {
            console.log("You rocked the PC! Bravo!");
            break;
        }
        else if (compScore===4 && userScore===4) {
            console.log("It's a really tough one!!!!\nHold on!");
        }
        else if (compScore===4 && compScore_check===0) {
            console.log("You're about to get demolished!!");
            compScore_check =1;
        }
        else if (userScore===4 && userScore_check===0) {
            console.log("You're almost there! Keep it up!!");
            userScore_check = 1;
        };
    };
    
};  

Game();
