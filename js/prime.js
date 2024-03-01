"use strict";

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    assignRandomNumber();

    const divOne = document.getElementById("btn-1");
    divOne.addEventListener("click", changeBackground);

   
}



