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
function changeBackgroundCorrect(){
    const bgColor = "green";
    const borderStyle = "5px solid lightgreen";

    const divEl = document.getElementById(`btn-1`);

    divEl.style.backgroundColor = bgColor;
    divEl.style.border = borderStyle;
}

function changeBackgroundWrong(){
    const bgColor = "red";
    const borderStyle = "5px solid pink";

    const divEl = document.getElementById(`btn-1`);

    divEl.style.backgroundColor = bgColor;
    divEl.style.border = borderStyle;
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


  //TRASH
  function getId(){

    const buttonPressed = e => {
      console.log(e.target.id);  // Get ID of Clicked Element
    }
    
    for (let i = 1; i <= 20; i++) {
            
        document.getElementById(`btn-${i}`).addEventListener("click", buttonPressed);
    }
    }