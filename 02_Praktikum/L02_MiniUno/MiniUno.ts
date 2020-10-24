namespace L02_MiniUno {
    
    let colorHand: string[];
    let numberHand: number;
    let colorStack: string[];
    let numberStack: number;
    
    let handCard: HTMLDivElement;
    let playerHand: HTMLDivElement = <HTMLDivElement>document.getElementById("playerHand");
    let computerHand: HTMLDivElement = <HTMLDivElement>document.getElementById("computerHand");
    
    let cardAmount: string | null = prompt("Choose the amount of cards you want to play with.");
    let amount: number = Number(cardAmount);
    
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        // console.log("start");   
        generateRandomCards();
        firstPlayCard();
                
        document.getElementsByClassName("handCard")?.addEventListener("click", playersTurn);
        document.getElementById("cardStack")?.addEventListener("click", newCard);
        document.getElementById("passBtn")?.addEventListener("click", passRound);
    }

    function generateRandomCards(): void {
        // console.log("generateHandCards");
        for (let i: number = 0; i < amount; i++) {
            generateHandCard();       
            }
                
        for (let i: number = 0; i < amount; i++) {
            generateComputerCard();
            }
    }

    function generateHandCard(): void {
        let handCard: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        playerHand.appendChild(handCard);
                
        colorHand = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
        let x: number = Math.floor((Math.random() * 3) + 0);
        numberHand = Math.floor((Math.random() * 9) + 0);
    
        handCard.setAttribute("class", "handCard");
        handCard.style.backgroundColor = colorHand[x];
        handCard.innerHTML = "" + numberHand;
    }

    function generateComputerCard(): void {
        let computerCard: HTMLDivElement = document.createElement("div");
        computerHand.appendChild(computerCard);
                
        colorHand = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
        let x: number = Math.floor((Math.random() * 3) + 0);
        numberHand = Math.floor((Math.random() * 9) + 0);

        console.log(colorHand[x], numberHand);
                
        computerCard.setAttribute("class", "computerCard");
        computerCard.innerHTML = "UNO";
    }
            
    function firstPlayCard(): void  {
        // console.log("gameStart");
        let playStack: HTMLDivElement = document.createElement("div");
        document.body.appendChild(playStack);
        
        colorStack = ["#ffff00", "#ff0000", "#00ff00", "#0000ff"];
        let x: number = Math.floor((Math.random() * 3) + 0);
        numberStack = Math.floor((Math.random() * 9) + 0);

        playStack.setAttribute("id", "playStack");
        playStack.style.backgroundColor = colorStack[x];
        playStack.innerHTML = "" + numberStack;
    }

    function playersTurn(): void {
        console.log("picking card");
        
        if (colorHand == colorStack || numberHand == numberStack) {
            drawCard();
        } 
        
        if (colorHand == colorStack || numberHand == numberStack && amount < 1) {
            window.alert("Congrats! You've won!");
        }
        
        computersTurn();
    }
    
    function computersTurn(): void {
        
        if (colorHand == colorStack || numberHand == numberStack) {
            drawCard();
        } else {
            newCard();
        }
        
        if (colorHand == colorStack || numberHand == numberStack && amount < 1) {
            window.alert("Oh no! You've lost!");
        }
        
        playersTurn();
    }
    
    function drawCard(): void {
        // console.log("card played");

        // playStack gets color and number from handCard
        
        playerHand.removeChild(handCard);
    }
    
    function newCard(): void {
        // console.log("card picked")
        if (playersTurn()) {
            generateHandCard();
        } else {
            generateComputerCard();
        }
    }

    function passRound(): void {
        if (playersTurn()) {
            computersTurn();
        } else {
            playersTurn();
        }
    }
}