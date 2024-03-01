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
function changeBackgroundCorrect(element){
    const bgColor = "green";
    const borderStyle = "5px solid lightgreen";
    // const btnEl = document.getElementById(`btn-1`);

    element.style.backgroundColor = bgColor;
    element.style.border = borderStyle;
    element.disabled = true;
}

function changeBackgroundWrong(element){
    const bgColor = "red";
    const borderStyle = "5px solid pink";
    // const btnEl = document.getElementById(`btn-2`);

    element.style.backgroundColor = bgColor;
    element.style.border = borderStyle;
    element.disabled = true;
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

  //CHECK AND LIST NUMBER OF PRIMES

  function listNumberofPrimes() {

    let primeCount = 0;

  for (let i = 1; i <= 20; i++) {
        
    const current = document.getElementById(`btn-${i}`)
    const number = current.innerText;
    const checkifPrime = isPrime(number);
    
    if(checkifPrime){
        console.log(`Prime ${number}`);
        primeCount++;
    }
    else console.log(`Nope ${number}`);
    }

    const newHead = document.querySelector("h2");
    newHead.innerText = `Number of primes to find: ${primeCount}`;
    
}

  //TRASH

  function getClickName(object){
    return object.id
  }

  function getId(){
    

  for (let i = 1; i <= 20; i++) {
    const item = document.getElementById(`btn-${i}`);
    item.addEventListener("click", item => {console.log(item.target.id)}); // How does this log return a value but function below is undefined??
        }
  }

  function getPlayerSelection(){
    let choice = "";

    for (let i = 1; i <= 20; i++) {
      const item = document.getElementById(`btn-${i}`);
      item.addEventListener("click", item => {choice = item.target.id}); // How does this log return a value but function below is undefined??
          }
    return choice;
    }

//   function getIdNmber(){

//     let idValue = "";

//     for (let i = 1; i <= 20; i++) {
//       let item = document.getElementById(`btn-${i}`);
//       item.addEventListener("click", item => { idValue = item.target.id});
//       return item;
//           }

//     }


//   function getId(){

//     const buttonPressed = e => {
//       console.log(e.target.id); // Get ID of Clicked Element
//     }
    
//     for (let i = 1; i <= 20; i++) {
            
//         document.getElementById(`btn-${i}`).addEventListener("click", buttonPressed);
//     }
//     }