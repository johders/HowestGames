"use strict";

let playingField, allDivs, newCard;

let counter = 0;
let pairTracker = 0;
let pairCheck = [];
let cardComparer = [];

function createPlayingField(){  

    playingField = document.getElementById("playing-field")
    const colors = ["pair-1", "pair-2","pair-3", "pair-4","pair-5", "pair-6","pair-7", "pair-8","pair-9", "pair-10","pair-11", "pair-12", 
    "pair-1", "pair-2","pair-3", "pair-4","pair-5", "pair-6","pair-7", "pair-8","pair-9", "pair-10","pair-11", "pair-12"];

    const shuffled = colors.sort(() => (Math.random() > .5) ? 2 : -1);

    for(let i = 0; i < 24; i++){
        newCard = document.createElement("div");
        newCard.setAttribute("id", `div-${i}`);
        newCard.classList.add("playing-card");
        const newClass = `${shuffled[i]}`;
        newCard.classList.add(newClass);
        playingField.append(newCard);
    }
}

function addClickEventsToPlayingCards() {
    allDivs = document.querySelectorAll(".playing-card");
    allDivs.forEach(element => { element.addEventListener("click", revealColorOnClick) });
}

function revealColorOnClick(e){
    const currentClass = this.classList[1];
    pairCheck.push(currentClass);
    cardComparer.push(e);
    counter ++;
    this.classList.add(`${currentClass}-show`);
    this.removeEventListener("click", revealColorOnClick);
    setTimeout(compareWithPrevious, 200);

    function compareWithPrevious(){
        if(counter === 2 && (pairCheck[0] !== pairCheck[1])){
            cardComparer[1].target.classList.remove(`${currentClass}-show`);
            cardComparer[1].target.addEventListener("click", revealColorOnClick);          
            cardComparer[0].target.classList.remove(`${pairCheck[0]}-show`);
            cardComparer[0].target.addEventListener("click", revealColorOnClick);   
            counter = 0;
            cardComparer = [];      
            pairCheck = [];
        }
        if(counter === 2 && (pairCheck[0] === pairCheck[1])){   
            cardComparer[1].target.classList.add("match");
            cardComparer[0].target.classList.add("match");
            counter = 0;
            cardComparer = [];      
            pairCheck = [];
            pairTracker ++;

            if(pairTracker === 12){
                celebrateWin();
            }
        }
    }
}

function celebrateWin() {

    const jsConfetti = new JSConfetti();
   
    jsConfetti.addConfetti({
        emojis: ['🧠', '🤓', '📖', '🎒', '🧠'],
     });
}

function newGame() {
    const btnStartNewGame = document.getElementById("new-game");
    btnStartNewGame.addEventListener("click", clearPlayingField);
}

function clearPlayingField(){
    allDivs.forEach(element => element.remove());
    pairTracker = 0;
    createPlayingField();
    addClickEventsToPlayingCards();
}


