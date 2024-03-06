"use strict";

function getUserInputAndGenerateElements(){
    const inputField = document.getElementById("input-el");
    const btnConfirm = document.getElementById("btn-go");  

    btnConfirm.addEventListener("click", generateDivs)

    function generateDivs(){
        const valueEntered = inputField.value;        
        const playingField = document.getElementById("playing-field");

        for (let i = 0; i < valueEntered; i++) {
            const divToAdd = document.createElement("div");           
            divToAdd.classList.add("playing-card");
            divToAdd.setAttribute("id", `div-${i + 1}`);
            divToAdd.innerHTML = "<span>?</span>";
            playingField.append(divToAdd);
            
        }
        const randmNumber = Math.floor(Math.random() * valueEntered) + 1;

        const specialDiv = document.getElementById(`div-${randmNumber}`);
        specialDiv.classList.add("special");

            console.log(specialDiv);
            addClickEventsToAddDivs();
        
            btnConfirm.disabled = true;
    
    }
}

function addClickEventsToAddDivs(){
    const allDivs = document.querySelectorAll(".playing-card");

    allDivs.forEach(element => { element.addEventListener("click", checkIfSpecial)
        
    });
}

function checkIfSpecial(e){

    if (this.classList.contains("special")){
        this.innerHTML = "";
        this.classList.add("bingo");
    }
    else{
        this.classList.add("darkness");
    }
}


