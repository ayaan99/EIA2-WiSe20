namespace L04_PotionMaker {
    
    window.addEventListener("load", handleLoad);
    
    function handleLoad(): void {
        console.log("start");  
        generateContent(data);
        
        let addInfo: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addInfo");
        let addIngredient: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addIngredient");
        let addTempSetting: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addTempSetting");
        let addStirSetting: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addStirSetting");
        
        addInfo.addEventListener("click", createRecipe);
        addIngredient.addEventListener("click", addIngredients);
        addTempSetting.addEventListener("click", addTempSettings);
        addStirSetting.addEventListener("click", addStirSettings);
    }

    function createRecipe(_event: MouseEvent): void {
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#infoOutput");
        recipe.innerHTML += " ";

        let formData: FormData = new FormData(document.forms[0]);
        
        for (let entry of formData) {
            switch (entry[0]) {
                case "potionName":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Name: " + entry[1] + "</p>";
                    }
                    break;
                case "description":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Description: " + entry[1] + "</p>";
                    }
                    break;
                case "effect":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Effect: " + entry[1] + "</p>";
                    }
                    break;
                case "duration":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Duration: " + entry[1] + "h</p>";
                    }
                    break;
            }
        }
    }

    function addIngredients(_event: MouseEvent): void {
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#instructionOutput");
        
        let formData: FormData = new FormData(document.forms[1]);
        let totalPrice: number = 0;
        
        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let ingredient: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(ingredient.getAttribute("price"));

            //Amount funktioniert irgendwie nur richtig, wenn eine Checkbox ausgewählt wurde und alle anderen Stepper auf 0 stehen
            let amountSelector: string = entry[1] + "_amount";
            let amount: number = Number(formData.get(amountSelector));

            if (entry[0] == "Ingredient" && entry[1] != "") {
                recipe.innerHTML += "<p>Add: " + amount + " " + entry[1] + " " + "(" + Currency(itemPrice) + ")" + "</p>";
            }
            totalPrice += itemPrice;
        }
        recipe.innerHTML += "<p><strong>Total: " + Currency(totalPrice);
    }

    function addTempSettings(_event: MouseEvent): void {
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#instructionOutput");
        let formData: FormData = new FormData(document.forms[1]);

        for (let entry of formData) {
            switch (entry[0]) {
                case "temperatur":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Heating: " + entry[1] + " C°<p/>";
                    }
                    break;
                case "consistency":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Consistency should be: " + entry[1] + "</p>";
                    }
                    break;
                case "colorTemp":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Color should be: " + entry[1] + "</p>";
                    }
                    break;
            }
        }
    }

    function addStirSettings(_event: MouseEvent): void {
        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("div#instructionOutput");
        let formData: FormData = new FormData(document.forms[1]);

        for (let entry of formData) {
            switch (entry[0]) {
                case "stirMin":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Stiring: " + entry[1] + " min<p/>";
                        }
                    break;
                case "consistency":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Consistency should be: " + entry[1] + "</p>";
                        }
                    break;
                case "colorStir":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Color should be: " + entry[1] + "</p>";
                        }
                    break;
                case "intensity":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<p>Stir with this intensity: " + entry[1] + "</p>";
                        }
                    break;
            }
        }
    }

    function Currency(_price: number): string {
        let knut: number;
        let sickel: number;
        let galleone: number;
        let currency;
    
        if (_price < 29) {
            currency = _price.toString() + " Knut";
            } else if (_price < 493) {
            sickel = _price / 29;
            knut = _price % 29;
    
            currency = sickel.toFixed(0) + " Sickel, " + knut.toFixed(0) + " Knut";
            } else {
            galleone = _price / 493;
            _price %= 493;
            sickel = _price / 29;
            knut = _price % 29;
    
            currency = galleone.toFixed(0) + " Galleone, " + sickel.toFixed(0) + " Sickel, " + knut.toFixed(0) + " Knut";
            }
        return currency;
    }
}