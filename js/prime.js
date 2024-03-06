"use strict";

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    assignRandomNumber();
    
    const btnOne = document.getElementById("btn-5");
    const btnTwo = document.getElementById("btn-3");
    const btnTest = document.getElementById("btn-20"); 

    // divOne.addEventListener("click", changeBackgroundCorrect(divOne)); // How pass arguments into methods without invoking instantly???
    
    
    btnOne.addEventListener("click", changeBackgroundCorrect); 
    btnTwo.addEventListener("click", changeBackgroundWrong);

    const testie = btnOne.innerHTML;

    const buttons = document.querySelectorAll("button");


    //Button.addEventListener("click", passIntoEvtListener.bind(someString));

    buttons.forEach(button => button.addEventListener("click", whatevs)); //How doe this not wait for click??

    function whatevs(event){

        // this.innerHTML

        // alert(`Got clicked! my nr is: ${button.id}`);
        console.log(event);
        const btnValue = event.target.innerHTML;

        if(isPrime(+btnValue)){
            changeBackgroundCorrect(event.target);
        }
        else changeBackgroundWrong(event.target);
        
    }

    // function whatevs(){
    //     alert(`Got clicked! my nr is: ${button.id}`);
    // }

    console.log(buttons);

    console.log(getClickName(btnTwo));

    getId();
    console.log(getPlayerSelection());

    listNumberofPrimes();

}




