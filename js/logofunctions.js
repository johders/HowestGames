"use strict";

let attemptCounter = 0;
let inputField, valueEntered, btnConfirm, gameStats, allDivs, attemptTracker, statsNumberOfSquares, gameStatContainer;

function getUserInputAndGenerateElements() {

    btnConfirm = document.getElementById("button-addon2");
    inputField = document.getElementById("input-el");
    btnConfirm.addEventListener("click", generatePlayingCards);

}

function generatePlayingCards() {
    valueEntered = inputField.value;
    const playingField = document.getElementById("playing-field");

    if (!alertIncorrectInput(valueEntered)) {

        for (let i = 0; i < valueEntered; i++) {
            const divToAdd = document.createElement("div");
            divToAdd.classList.add("playing-card");
            divToAdd.setAttribute("id", `div-${i + 1}`);
            divToAdd.innerHTML = "<span>?</span>";
            playingField.append(divToAdd);
        }
        assignRandomLogoCard();
    }
}

function assignRandomLogoCard() {
    const randmNumber = Math.floor(Math.random() * valueEntered) + 1;
    statsNumberOfSquares = document.getElementById("square-amount");
    attemptTracker = document.getElementById("attempt-tracker");

    statsNumberOfSquares.innerHTML = `Squares: ${valueEntered}`;
    attemptTracker.innerHTML = `Attempts: 0/5`;

    const specialDiv = document.getElementById(`div-${randmNumber}`);
    specialDiv.classList.add("special");

    addClickEventsToPlayingCards();

    btnConfirm.disabled = true;
    inputField.value = "";

}

function addClickEventsToPlayingCards() {
    allDivs = document.querySelectorAll(".playing-card");
    allDivs.forEach(element => { element.addEventListener("click", revealCardAndUpdateStats) });
}

function removeClickEventsFromPlayingCards() {
    allDivs.forEach(element => { element.removeEventListener("click", revealCardAndUpdateStats) });
}

function revealCardAndUpdateStats(e) {

    gameStats = document.createElement("div");
    gameStatContainer = document.querySelector(".container");

    if (this.classList.contains("special")) {
        this.innerHTML = "";
        this.classList.add("bingo");
        attemptCounter++;
        attemptTracker.innerHTML = `Attempts: ${attemptCounter}/5`;
        removeClickEventsFromPlayingCards();
        winGameFeedback();

    }
    else {
        playIncorrectSound();
        this.classList.add("darkness");
        this.innerHTML = "";
        attemptCounter++;
        attemptTracker.innerHTML = `Attempts: ${attemptCounter}/5`;
        if (attemptCounter >= 5) {
            removeClickEventsFromPlayingCards();
            loseGameFeedback();
            const logoSquare = document.querySelector(".special");
            logoSquare.innerHTML = "";
            logoSquare.classList.add("bingo");
        }
    }
}

function alertIncorrectInput(input) {

    const convertedToNum = +input;

    if (isNaN(convertedToNum) || convertedToNum <= 0 || convertedToNum >= 20) {
        showAlert();
        return true;
    }
}

function showAlert() {
    const alertBox = document.querySelector(".alert-box");
    const closeModal = document.querySelector(".close-button");

    alertBox.showModal();

    closeModal.addEventListener("click", () => {alertBox.close();});
}

function playLoserSound(){
    const sound = new Audio("../audio/fail.wav")
    sound.play();
}

function playIncorrectSound(){
    const sound = new Audio("../audio/ha.wav")
    sound.play();
}

function newGame() {
    const btnStartNewGame = document.createElement("button");
    btnStartNewGame.classList.add("btn", "btn-info");
    btnStartNewGame.innerHTML = "Reset Game";
    gameStats.append(btnStartNewGame);
    btnStartNewGame.addEventListener("click", clearPlayingField);
}

function clearPlayingField() {
  
    allDivs.forEach(element => element.remove());

    btnConfirm.disabled = false;
    attemptCounter = 0;
    attemptTracker.innerHTML = "Attempts";
    statsNumberOfSquares.innerHTML = "Squares";
    gameStats.innerHTML = "";
}

function loseGameFeedback() {

    playLoserSound();
    const logoSquare = document.querySelector(".special");

    const header = document.createElement("h2");
    const info = document.createElement("p");
    header.innerHTML = "Game Over!";

    const converted = logoSquare.id.replace("div-", "");
    info.innerHTML = `Howest logo was hidden behind square: ${converted}`;

    const loserDiv = document.createElement("div");
    loserDiv.classList.add("alert", "alert-info");

    gameStatContainer.append(gameStats);

    loserDiv.append(header);
    loserDiv.append(info);

    gameStats.append(loserDiv);
    newGame();

}

function winGameFeedback() {

    const winnerDiv = document.createElement("div");
    winnerDiv.classList.add("alert", "alert-info");

    if(attemptCounter === 1){
        winnerDiv.innerHTML = `You found the logo in ${attemptCounter} attempt!`;
    }
    else winnerDiv.innerHTML = `You found the logo in ${attemptCounter} attempts!`;

    gameStatContainer.append(gameStats);

    gameStats.append(winnerDiv);

    newGame();
    celebrateWin();

}

function celebrateWin() {

    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
        emojis: ['🌈', '🦄', '✨', '💫', '🌸'],
     });

}