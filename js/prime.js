"use strict";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    assignRandomNumber();

    const divOne = document.getElementById("btn-2");
    divOne.addEventListener("click", changeBackground);

    console.log(getValue(divOne));

    console.log(isPrime(47));
}




