let compScore = 0;
let userScore = 0;
let compRes;
let userinput = "q";
let compScore_check = 0;
let userScore_check = 0;

let usr_score = document.querySelector(".player .value");
usr_score.textContent = userScore;

let pc_score = document.querySelector(".PC .value");
pc_score.textContent = compScore;

let flavour = document.querySelector(".flavour");
let flavour2 = document.querySelector(".flavour2");


let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
     
        button.addEventListener("click", () => {
            userinput = button.id;
            //flavour.textContent ="";
            Game();
});

}); 

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

function singleGame() {             // tutorial je razdvojio userinput u jednu funkciju i if-scoring u drugu funkciju, a u mene je to zajedno
    


    if ((userinput==="Rock"&&compRes==="Rock")||(userinput==="Scissors"&&compRes==="Scissors")||(userinput==="Paper"&&compRes==="Paper")) {
        console.log("It's a tie!");
        flavour.textContent = '"All guys are same" (Tie)';
    };
    if ((userinput==="Rock"&&compRes==="Paper")||(userinput==="Scissors"&&compRes==="Rock")||(userinput==="Paper"&&compRes==="Scissors")) {
        console.log("You lost!");
        compScore++;
        flavour.textContent = 'You lost this one! He screwed you... and her';
    }
    if ((userinput==="Rock"&&compRes==="Scissors")||(userinput==="Scissors"&&compRes==="Paper")||(userinput==="Paper"&&compRes==="Rock")) {
        console.log("You won!");
        userScore++;
        flavour.textContent = 'You win! There is still some hope for you... Cope*';
    }
};

function Game() {
    
    compRes = computerPlay();
    singleGame();
    console.log("Your score: " + userScore + "\nComputer score: " + compScore);
    usr_score.textContent = userScore;
    pc_score.textContent = compScore;
    
    
    
    if (compScore===5 && compScore_check===1) {
        flavour2.textContent = "He is gonna cum and you gonna swalla! BUAHAHAH GAME OVER FO YOU"
        console.log("You got squashed! BUAAHAHA");
        alert("Wanna try this agony again?");
        compScore = 0;
        userScore = 0;
        usr_score.textContent = userScore;
        pc_score.textContent = compScore;
        userScore_check = 0;
        compScore_check = 0;
        flavour.textContent = "";
        flavour2.textContent = "";
    }
    
    else if (userScore===5 && userScore_check===1) {
        flavour2.textContent = "You rocked that fucker! You'll still bang that hoe... for now"
        console.log("You rocked the PC! Bravo!");
        alert("Wanna try this agony again?");
        compScore = 0;
        userScore = 0;
        usr_score.textContent = userScore;
        pc_score.textContent = compScore;
        userScore_check = 0;
        compScore_check = 0;
        flavour.textContent = "";
        flavour2.textContent = "";
    }
    else if (compScore===4 && userScore===4) {
        flavour2.textContent = "It's a really tough one!! You two fuckers slayin each other for d hoe";
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