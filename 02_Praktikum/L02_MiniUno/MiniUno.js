"use strict";
var L02_MiniUno;
(function (L02_MiniUno) {
    let colorHand;
    let numberHand;
    let colorStack;
    let numberStack;
    let handCard;
    let playerHand = document.getElementById("playerHand");
    let computerHand = document.getElementById("computerHand");
    let cardAmount = prompt("Choose the amount of cards you want to play with.");
    let amount = Number(cardAmount);
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        // console.log("start");   
        generateRandomCards();
        firstPlayCard();
        document.getElementsByClassName("handCard")?.addEventListener("click", playersTurn);
        document.getElementById("cardStack")?.addEventListener("click", newCard);
        document.getElementById("passBtn")?.addEventListener("click", passRound);
    }
    function generateRandomCards() {
        // console.log("generateHandCards");
        for (let i = 0; i < amount; i++) {
            generateHandCard();
        }
        for (let i = 0; i < amount; i++) {
            generateComputerCard();
        }
    }
    function generateHandCard() {
        let handCard = document.createElement("div");
        playerHand.appendChild(handCard);
        colorHand = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
        let x = Math.floor((Math.random() * 3) + 0);
        numberHand = Math.floor((Math.random() * 9) + 0);
        handCard.setAttribute("class", "handCard");
        handCard.style.backgroundColor = colorHand[x];
        handCard.innerHTML = "" + numberHand;
    }
    function generateComputerCard() {
        let computerCard = document.createElement("div");
        computerHand.appendChild(computerCard);
        colorHand = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
        let x = Math.floor((Math.random() * 3) + 0);
        numberHand = Math.floor((Math.random() * 9) + 0);
        console.log(colorHand[x], numberHand);
        computerCard.setAttribute("class", "computerCard");
        computerCard.innerHTML = "UNO";
    }
    function firstPlayCard() {
        // console.log("gameStart");
        let playStack = document.createElement("div");
        document.body.appendChild(playStack);
        colorStack = ["#ffff00", "#ff0000", "#00ff00", "#0000ff"];
        let x = Math.floor((Math.random() * 3) + 0);
        numberStack = Math.floor((Math.random() * 9) + 0);
        playStack.setAttribute("id", "playStack");
        playStack.style.backgroundColor = colorStack[x];
        playStack.innerHTML = "" + numberStack;
    }
    function playersTurn() {
        console.log("picking card");
        if (colorHand == colorStack || numberHand == numberStack) {
            drawCard();
        }
        if (colorHand == colorStack || numberHand == numberStack && amount < 1) {
            window.alert("Congrats! You've won!");
        }
        computersTurn();
    }
    function computersTurn() {
        if (colorHand == colorStack || numberHand == numberStack) {
            drawCard();
        }
        else {
            newCard();
        }
        if (colorHand == colorStack || numberHand == numberStack && amount < 1) {
            window.alert("Oh no! You've lost!");
        }
        playersTurn();
    }
    function drawCard() {
        // console.log("card played");
        // playStack gets color and number from handCard
        playerHand.removeChild(handCard);
    }
    function newCard() {
        // console.log("card picked")
        if (playersTurn()) {
            generateHandCard();
        }
        else {
            generateComputerCard();
        }
    }
    function passRound() {
        if (playersTurn()) {
            computersTurn();
        }
        else {
            playersTurn();
        }
    }
})(L02_MiniUno || (L02_MiniUno = {}));
//# sourceMappingURL=MiniUno.js.map