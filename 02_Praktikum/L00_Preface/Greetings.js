"use strict";
var L00_Preface;
(function (L00_Preface) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var person = prompt("What's your name?");
        if (person == null || person == "") {
            window.alert("I don't know your name yet.");
        }
        else {
            window.alert("Hello " + person + "! Have a nice day :)");
        }
    }
})(L00_Preface || (L00_Preface = {}));
//# sourceMappingURL=Greetings.js.map