"use strict";

let attemptCounter = 0;

function getUserInputAndGenerateElements(){
    const inputField = document.getElementById("input-el");
    const btnConfirm = document.getElementById("button-addon2");  

    btnConfirm.addEventListener("click", generateDivs)

    function generateDivs(){
        const valueEntered = inputField.value;        
        const playingField = document.getElementById("playing-field");

        if(!alertIncorrectInput(valueEntered)){

        for (let i = 0; i < valueEntered; i++) {
            const divToAdd = document.createElement("div");           
            divToAdd.classList.add("playing-card");
            divToAdd.setAttribute("id", `div-${i + 1}`);
            divToAdd.innerHTML = "<span>?</span>";
            playingField.append(divToAdd);
            
        }
        const randmNumber = Math.floor(Math.random() * valueEntered) + 1;
        const statsAmount = document.getElementById("square-amount");
        statsAmount.innerHTML = `Vakjes: ${valueEntered}`;

        const specialDiv = document.getElementById(`div-${randmNumber}`);
        specialDiv.classList.add("special");

            console.log(specialDiv);
            addClickEventsToPlayingCards();
        
            btnConfirm.disabled = true;
            inputField.value = "";
        }
    
    }
}

function alertIncorrectInput(input){

    const convertedToNum = +input;
    console.log(convertedToNum);

    if(isNaN(convertedToNum) || convertedToNum <= 0 || convertedToNum >= 20){
        alert("Geef een positief geheel getal in, kleiner dan 20")
        return true;
    }
    
}

function addClickEventsToPlayingCards(){
    const allDivs = document.querySelectorAll(".playing-card");

    allDivs.forEach(element => { element.addEventListener("click", checkIfSpecial)
        
    });
}

function removeClickEventsFromPlayingCards(){
    const allDivs = document.querySelectorAll(".playing-card");

    allDivs.forEach(element => { element.removeEventListener("click", checkIfSpecial)
        
    });
}

function checkIfSpecial(e){

    const attemptTracker = document.getElementById("attempt-tracker");

    if (this.classList.contains("special")){
        this.innerHTML = "";
        this.classList.add("bingo");
        attemptCounter++;
        attemptTracker.innerHTML = `Pogingen: ${attemptCounter}/5`;
        removeClickEventsFromPlayingCards();
        winGameFeedback();
        
    }
    else{
        this.classList.add("darkness");
        this.innerHTML = "";
        attemptCounter++;
        attemptTracker.innerHTML = `Pogingen: ${attemptCounter}/5`;
        if(attemptCounter >= 5){
            removeClickEventsFromPlayingCards();
            loseGameFeedback();
            const logoSquare = document.querySelector(".special");
            logoSquare.innerHTML = ""; 
            logoSquare.classList.add("bingo");
        }
         
    }
}

function newGame(){
    const stats = document.getElementById("game-stats");
    const btnStartNewGame = document.createElement("button");
    btnStartNewGame.classList.add("btn", "btn-info");
    btnStartNewGame.innerHTML = "Reset Game";
    stats.append(btnStartNewGame);
    btnStartNewGame.addEventListener("click", clearPlayingField);
}

function clearPlayingField(){
    const attemptTracker = document.getElementById("attempt-tracker");
    const allDivs = document.querySelectorAll(".playing-card");
    const gameStats = document.getElementById("game-stats");
    const statsAmount = document.getElementById("square-amount");
        
    allDivs.forEach(element => element.remove());

    const btnConfirm = document.getElementById("button-addon2"); 
    btnConfirm.disabled = false;
    attemptCounter = 0;
    attemptTracker.innerHTML = `Pogingen:`;
    statsAmount.innerHTML = `Vakjes:`;
    gameStats.innerHTML = "";
    
}

function loseGameFeedback(){
const feedbackElement = document.getElementById("game-stats");
const logoSquare = document.querySelector(".special");

const header = document.createElement("h2")
const info = document.createElement("p")
header.innerHTML = "Game Over!"

const converted = logoSquare.id.replace("div-", "");
info.innerHTML = `Logo in square: ${converted}`

const loserDiv = document.createElement("div");
loserDiv.classList.add("alert", "alert-danger")

loserDiv.append(header);
loserDiv.append(info);

feedbackElement.append(loserDiv);
newGame();

}

function winGameFeedback(){
    const feedbackElement = document.getElementById("game-stats");
    
    const winnerDiv = document.createElement("div");
    winnerDiv.classList.add("alert", "alert-success")

    winnerDiv.innerHTML = `You found the logo in ${attemptCounter} tries`
    
    feedbackElement.append(winnerDiv);

    newGame();
    celebrateWin();

}

function celebrateWin(){
    const canvas = document.getElementById("celebration");
    const jsConfetti = new JSConfetti();
 
      jsConfetti.addConfetti();
 
 }


