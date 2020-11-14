"use strict";
var L05_PotionMaker;
(function (L05_PotionMaker) {
    function generateContent(_data) {
        for (let category in _data) {
            // console.log(category);
            let items = _data[category];
            let group = null;
            group = createMultiple(items, category);
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L05_PotionMaker.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let span = document.createElement("span");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            let stepper = document.createElement("input");
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
        let addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.id = "addIngredient";
        addBtn.innerHTML = "Add";
        group.appendChild(addBtn);
        return group;
    }
})(L05_PotionMaker || (L05_PotionMaker = {}));
//# sourceMappingURL=GenerateContent.js.map