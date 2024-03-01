"use strict";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    assignRandomNumber();

    const divOne = document.getElementById("btn-2");
    const divTwo = document.getElementById("btn-3");
    divOne.addEventListener("click", changeBackgroundCorrect);
    divTwo.addEventListener("click", changeBackgroundWrong);

    console.log(getValue(divOne));

    console.log(isPrime(47));

    getId();
}




