"use strict";
var L00_Preface;
(function (L00_Preface) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var person = prompt("What's your name?");
        if (person == null || person == "") {
            document.querySelector("#text").innerHTML = "I don't know your name yet.";
        }
        else {
            document.querySelector("#text").innerHTML = "Hello " + person + "! Have a nice day :)";
        }
    }
})(L00_Preface || (L00_Preface = {}));
//# sourceMappingURL=Greetings.js.map