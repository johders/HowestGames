"use strict";

//GENERATES 1-100
function generateRandom(){
    return Math.floor(Math.random() * 100) + 1;
}

//ASSIGNS RANDOM
function assignRandomNumber(){
    
    for (let i = 1; i <= 20; i++) {
        
        document.getElementById(`btn-${i}`).innerText = generateRandom();
        
    }
}

//CHANGE BACKGROUND
function changeBackground(){
    const bgColor = "green";
    const borderColor = "darkgreen";

    const divEl = document.getElementById(`btn-1`);

    divEl.style.backgroundColor = bgColor;
    divEl.style.borderColor = borderColor;
}

//GET INNER TEXT BASED ON ID
function getValue(element){
    return element.innerText;
    
}

//PRIME NUMBER BOOL
function isPrime(number) {
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