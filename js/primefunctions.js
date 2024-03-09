"use strict";

let primeCount = 0;

function generateRandom(){
    return Math.floor(Math.random() * 100) + 1;
}

function assignRandomNumber(){

  const playingField = document.getElementById("playing-field")
    
    for (let i = 1; i <= 20; i++) {
      const divToAdd = document.createElement("div");           
      divToAdd.classList.add("playing-card");
      divToAdd.setAttribute("id", `div-${i}`);
      divToAdd.innerHTML = generateRandom();;
      playingField.append(divToAdd);     
    }
}

function changeBackgroundCorrect(element){
    const bgColor = "#06d6a0";
    const borderStyle = "5px solid lightgreen";
    const divs = document.querySelectorAll(".playing-card");
    
    element.style.backgroundColor = bgColor;
    element.style.border = borderStyle;
    element.disabled = true;
    primeCount--;
    if(primeCount == 0){

      celebrateWin();
      divs.forEach(div => div.removeEventListener("click", revealResult)); 
    }
    updateFeedback();
}

function changeBackgroundWrong(element){
    const bgColor = "#ef476f";
    const borderStyle = "5px solid pink";

    element.style.backgroundColor = bgColor;
    element.style.border = borderStyle;
    element.disabled = true;
}

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

  function revealResult(e){
    const divValue = this.innerHTML;

    if(isPrime(+divValue)){
        changeBackgroundCorrect(this);
    }
    else changeBackgroundWrong(this);

    this.removeEventListener("click", revealResult);
}

  function listNumberofPrimes() {

  for (let i = 1; i <= 20; i++) {
        
    const current = document.getElementById(`div-${i}`)
    const number = current.innerText;
    const checkifPrime = isPrime(number);
    
    if(checkifPrime){
        console.log(`Prime ${number}`);
        primeCount++;
    }
    }
    const newHead = document.querySelector("p");
    newHead.innerText = `Number of primes to find: ${primeCount}`;
}

function updateFeedback(){
  const newHead = document.querySelector("p");
  newHead.innerText = `Number of primes left to find: ${primeCount}`;
}

function celebrateWin(){
  const canvas = document.getElementById("celebration");
  const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti();
}