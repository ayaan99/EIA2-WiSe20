"use strict";
var L04_PotionMaker;
(function (L04_PotionMaker) {
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
    L04_PotionMaker.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
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
            stepper.name = "amount";
            stepper.id = item.name + "_amount";
            stepper.step = "1";
            stepper.value = "0";
            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(stepper);
        }
        return group;
    }
})(L04_PotionMaker || (L04_PotionMaker = {}));
//# sourceMappingURL=GenerateContent.js.map