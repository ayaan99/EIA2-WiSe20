"use strict";
var L00_Preface;
(function (L00_Preface) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let person = prompt("What's your name?");
        let text = document.querySelector("#text");
        if (person == null || person == "") {
            text.innerHTML = "I don't know your name yet.";
        }
        else {
            text.innerHTML = "Hello " + person + "! Have a nice day :)";
        }
    }
})(L00_Preface || (L00_Preface = {}));
//# sourceMappingURL=Greetings.js.map