"use strict";

window.addEventListener("load", initialize);

function initialize() {
    assignRandomNumber();
    
    const divs = document.querySelectorAll(".playing-card");
    divs.forEach(div => div.addEventListener("click", revealResult)); 

    listNumberofPrimes();

}






