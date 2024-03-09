"use strict";

let attemptCounter = 0;

function getUserInputAndGenerateElements(){
    const inputField = document.getElementById("input-el");
    const btnConfirm = document.getElementById("btn-go");  

    btnConfirm.addEventListener("click", generateDivs)

    function generateDivs(){
        const valueEntered = inputField.value;        
        const playingField = document.getElementById("playing-field");

        for (let i = 0; i < valueEntered; i++) {
            const divToAdd = document.createElement("div");           
            divToAdd.classList.add("playing-card");
            divToAdd.setAttribute("id", `div-${i + 1}`);
            divToAdd.innerHTML = "<span>?</span>";
            playingField.append(divToAdd);
            
        }
        const randmNumber = Math.floor(Math.random() * valueEntered) + 1;

        const specialDiv = document.getElementById(`div-${randmNumber}`);
        specialDiv.classList.add("special");

            console.log(specialDiv);
            addClickEventsToPlayingCards();
        
            btnConfirm.disabled = true;
            inputField.value = "";
    
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

    //Aantal Pogingen: 0

    if (this.classList.contains("special")){
        this.innerHTML = "";
        this.classList.add("bingo");
        attemptCounter++;
        attemptTracker.innerHTML = `Aantal Pogingen: ${attemptCounter}/5`;
        removeClickEventsFromPlayingCards();
        winGameFeedback();
    }
    else{
        this.classList.add("darkness");
        attemptCounter++;
        attemptTracker.innerHTML = `Aantal Pogingen: ${attemptCounter}/5`;
        if(attemptCounter >= 5){
            removeClickEventsFromPlayingCards();
            loseGameFeedback();
        }
         
    }
}

function newGame(){
    const btnNewGame = document.getElementById("btn-new");
    

    btnNewGame.addEventListener("click", clearPlayingField);
}

function clearPlayingField(){
    const attemptTracker = document.getElementById("attempt-tracker");
    const allDivs = document.querySelectorAll(".playing-card");
    const gameStats = document.getElementById("game-stats");

    allDivs.forEach(element => element.remove());

    const btnConfirm = document.getElementById("btn-go"); 
    btnConfirm.disabled = false;
    attemptCounter = 0;
    attemptTracker.innerHTML = `Aantal Pogingen: ${attemptCounter}/5`;
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


}

function winGameFeedback(){
    const feedbackElement = document.getElementById("game-stats");
    
    const winnerDiv = document.createElement("div");
    winnerDiv.classList.add("alert", "alert-success")

    winnerDiv.innerHTML = `You found the logo in ${attemptCounter} tries`
    
    feedbackElement.append(winnerDiv);

}


