"use strict";

let primeCount = 0;

function createPlayingCardsWithRandomInnerValue() {

    const playingField = document.getElementById("playing-field");

    for (let i = 1; i <= 20; i++) {
        const divToAdd = document.createElement("div");
        divToAdd.classList.add("playing-card");
        divToAdd.setAttribute("id", `div-${i}`);
        divToAdd.innerText = generateRandomNumber();
        playingField.append(divToAdd);
    }
}

function displayNumberOfPrimesToFind() {

    for (let i = 1; i <= 20; i++) {

        const currentCard = document.getElementById(`div-${i}`);
        const number = currentCard.innerText;
        const checkifPrime = checkIfPrime(number);

        if (checkifPrime) {
            primeCount++;
        }
    }
    const feedbackText = document.querySelector("p");
    feedbackText.innerText = `Number of primes to find: ${primeCount}`;
}

function revealResultOnClick() {
    const divs = document.querySelectorAll(".playing-card");
    divs.forEach(div => div.addEventListener("click", revealResult));
}

function revealResult(e) {
    const cardValue = this.innerHTML;

    if (checkIfPrime(+cardValue)) {
        playCorrectSound();
        changeBackgroundGreen(this);
    }
    else changeBackgroundRed(this);

    this.removeEventListener("click", revealResult);
}

function changeBackgroundGreen(element) {
    const divs = document.querySelectorAll(".playing-card");

    element.classList.add("prime");

    element.disabled = true;
    primeCount--;

    if (primeCount == 0) {
        celebrateWin();
        divs.forEach(div => div.removeEventListener("click", revealResult));
    }

    updateFeedback();
}

function changeBackgroundRed(element) {

    element.classList.add("not-prime");
    element.disabled = true;
}

function checkIfPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function updateFeedback() {
    const feedbackText = document.querySelector("p");
    feedbackText.innerText = `Number of primes left to find: ${primeCount}`;
}

function celebrateWin() {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
}

function playCorrectSound(){
    const sound = new Audio("../audio/owee.wav")
    sound.play();
}
