"use strict";

let playingField, allDivs, randomNumberForPair, newCard;
const numbers = [];

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

let counter = 0;
let pairCheck = [];
let firstItem = [];

function revealColorOnClick(e){
    const currentClass = this.classList[1];
    pairCheck.push(currentClass);
    firstItem.push(e);
    counter ++;
    this.classList.add(`${currentClass}-show`);
    this.removeEventListener("click", revealColorOnClick);
    setTimeout(compareWithPrevious, 500);

    function compareWithPrevious(){
        if(counter === 2 && (pairCheck[0] !== pairCheck[1])){
            firstItem[1].target.classList.remove(`${currentClass}-show`);
            firstItem[1].target.addEventListener("click", revealColorOnClick);          
            firstItem[0].target.classList.remove(`${pairCheck[0]}-show`);
            firstItem[0].target.addEventListener("click", revealColorOnClick);         
        }
    }
    
    console.log(currentClass);
}


