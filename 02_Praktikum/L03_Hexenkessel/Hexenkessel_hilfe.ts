namespace L03_Cauldron {
    window.addEventListener("load", handleLoad);

    let totalCost: number = 0;
    let totalPrice: HTMLElement = <HTMLElement>document.querySelector("#price");
    let brewname: HTMLInputElement = <HTMLInputElement>document.querySelector("#brewname");
    let brewdescription: HTMLInputElement = <HTMLInputElement>document.querySelector("#description");
    let ingredientTable: HTMLElement = <HTMLElement>document.querySelector("#recipe");
    let effectTable: HTMLElement = <HTMLElement>document.querySelector("#effectTable");
    let procedureTable: HTMLTableElement = <HTMLTableElement>document.querySelector("#procedureTable");

    function handleLoad(): void {
        //let brewinfos: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#brewinfos");
        brewname?.addEventListener("input", displayBrew);
        brewdescription?.addEventListener("input", displayBrew);
        let additem: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
        additem.addEventListener("click", displayRecipe);

        let addeffect: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addeffect");
        addeffect.addEventListener("click", displayEffect);

        let addprocedure: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#addprocedure");
        addprocedure?.addEventListener("click", displayProcedure);
    }

    function displayBrew(): void {
        let brew: string = brewname.value;
        let name: HTMLElement = <HTMLElement>document.querySelector("#name");
        name.innerHTML = "" + brew;
        let brewdes: string = brewdescription.value;
        let description: HTMLElement = <HTMLElement>document.querySelector("#brewdescription");
        description.innerHTML = "" + brewdes;
    }

    function displayRecipe(_event: MouseEvent): void {
        let formData: FormData = new FormData(document.forms[1]);

        for (let entry of formData) {
            let ingredient: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(ingredient);
            console.log(item);
            let row: HTMLTableRowElement = document.createElement("tr");
            let tditem: HTMLTableDataCellElement = document.createElement("td");
            let tdamount: HTMLTableDataCellElement = document.createElement("td");
            let tdunit: HTMLTableDataCellElement = document.createElement("td");
            let tdprice: HTMLTableDataCellElement = document.createElement("td");
            let tddelete: HTMLTableDataCellElement = document.createElement("td");
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.classList.add("far", "fa-trash-alt");

            let itemPrice: number = Number(item.getAttribute("price"));
            let menge: number = Number(formData.get("amount"));
            let einheit: string = String(item.getAttribute("unit"));
            itemPrice = menge * itemPrice;

            tditem.innerHTML = "" + entry[1];
            tdamount.innerHTML = "" + menge;
            tdunit.innerHTML = "" + einheit;
            tdprice.innerHTML = "" + itemPrice.toFixed(2);
            tddelete.appendChild(deleteButton);
            row.appendChild(tditem);
            row.appendChild(tdamount);
            row.appendChild(tdunit);
            row.appendChild(tdprice);
            row.appendChild(tddelete);
            ingredientTable.appendChild(row);
            deleteButton.addEventListener("click", deleteItem);

            totalCost += itemPrice;

            totalPrice.innerHTML = "";
            totalPrice.innerHTML = totalCost.toFixed(2);
        }
    }

    function displayEffect(_event: MouseEvent): void {
        let formData: FormData = new FormData(document.forms[0]);

        //for (let entry of formData) {
        /* let effect: string = "[value='" + entry[1] + "']"; */
        //console.log(entry);
        let effect: string = String(formData.get("effect"));
        /* let item: HTMLInputElement = <HTMLInputElement>document.querySelector(effect);
        console.log(item); */
        let row: HTMLTableRowElement = document.createElement("tr");
        let tdeffect: HTMLTableDataCellElement = document.createElement("td");
        let tdtime: HTMLTableDataCellElement = document.createElement("td");
        let tddelete: HTMLTableDataCellElement = document.createElement("td");
        let deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.classList.add("far", "fa-trash-alt");

        let time: string = String(formData.get("Effecttime"));

        tdeffect.innerHTML = "" + effect;
        tdtime.innerHTML = "" + time;
        tddelete.appendChild(deleteButton);
        row.appendChild(tdeffect);
        row.appendChild(tdtime);
        row.appendChild(tddelete);
        effectTable.appendChild(row);
        deleteButton.addEventListener("click", deleteItem);
        //}
    }
    function displayProcedure(_event: MouseEvent): void {
        let formData: FormData = new FormData(document.forms[2]);
        for (let entry of formData) {
            let procedure: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(procedure);
            console.log(item);

            let row: HTMLTableRowElement = document.createElement("tr");
            let tdprocedure: HTMLTableDataCellElement = document.createElement("td");
            let tdtime: HTMLTableDataCellElement = document.createElement("td");
            let tddelete: HTMLTableDataCellElement = document.createElement("td");
            let deleteButton: HTMLButtonElement = document.createElement("button");
            deleteButton.classList.add("far", "fa-trash-alt");

            let temperature: number = Number(formData.get("temperature"));
            let intensity: number = Number(formData.get("intensity"));
            let cookingtime: string = String(formData.get("cookingtime"));

            tdprocedure.innerHTML = "" + entry[1];
            tdtime.innerHTML = "" + temperature + intensity + cookingtime;
            tddelete.appendChild(deleteButton);
            row.appendChild(tdprocedure);
            row.appendChild(tdtime);
            row.appendChild(tddelete);
            procedureTable.appendChild(row);
            deleteButton.addEventListener("click", deleteItem);
        }
    }

    function deleteItem(_event: MouseEvent): void {

        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        let grandParent: Node = <Node>parent.parentNode;
        let greatGrandParent: Node = <Node>grandParent.parentNode;
        parent.removeChild(target);
        grandParent.removeChild(parent);
        greatGrandParent.removeChild(grandParent);
    }
}