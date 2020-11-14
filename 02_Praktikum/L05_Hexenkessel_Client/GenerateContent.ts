namespace L05_PotionMaker {
    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }
    
    export function generateContent(_data: Data): void {
        for (let category in _data) {
            // console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
            group = createMultiple(items, category);

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        } 
     }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let span: HTMLSpanElement = document.createElement("span");
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            let stepper: HTMLInputElement = document.createElement("input");
            stepper.type = "number";
            stepper.name = item.name + "_amount";
            stepper.id = item.name + "_amount";
            stepper.step = "1";
            stepper.value = "0";
            stepper.min = "0";

            
            span.appendChild(checkbox);
            span.appendChild(label);
            span.appendChild(stepper);
            
            group.appendChild(span);
        }
        let addBtn: HTMLButtonElement = document.createElement("button");
        addBtn.type = "button";
        addBtn.id = "addIngredient";
        addBtn.innerHTML = "Add";
        group.appendChild(addBtn);

        return group;
    }
}