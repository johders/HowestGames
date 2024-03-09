"use strict";

let primeCount = 0;

function celebrateWin(){
   const canvas = document.getElementById("celebration");
   const jsConfetti = new JSConfetti();

     jsConfetti.addConfetti();

}



//GENERATES 1-100
function generateRandom(){
    return Math.floor(Math.random() * 100) + 1;
}

//ASSIGNS RANDOM
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

//CHANGE BACKGROUND
function changeBackgroundCorrect(element){
    const bgColor = "green";
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
    const bgColor = "red";
    const borderStyle = "5px solid pink";

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

  //REVEALS RESULT

  function revealResult(e){
    const divValue = this.innerHTML;

    if(isPrime(+divValue)){
        changeBackgroundCorrect(this);
    }
    else changeBackgroundWrong(this);

    this.removeEventListener("click", revealResult);
}

  //CHECK AND LIST NUMBER OF PRIMES

  function listNumberofPrimes() {

    // let primeCount = 0;

  for (let i = 1; i <= 20; i++) {
        
    const current = document.getElementById(`div-${i}`)
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

function updateFeedback(){
  const newHead = document.querySelector("h2");
    newHead.innerText = `Number of primes left to find: ${primeCount}`;
}

  //TRASH

  // function getClickName(object){
  //   return object.id
  // }

  // function getId(){
    

  // for (let i = 1; i <= 20; i++) {
  //   const item = document.getElementById(`div-${i}`);
  //   item.addEventListener("click", item => {console.log(item.target.id)}); // How does this log return a value but function below is undefined??
  //       }
  // }

  // function getPlayerSelection(){
  //   let choice = "";

  //   for (let i = 1; i <= 20; i++) {
  //     const item = document.getElementById(`div-${i}`);
  //     item.addEventListener("click", item => {choice = item.target.id}); // How does this log return a value but function below is undefined??
  //         }
  //   return choice;
  //   }

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