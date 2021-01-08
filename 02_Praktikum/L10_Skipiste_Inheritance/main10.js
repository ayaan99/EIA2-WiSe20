"use strict";
var L10_Skipiste_Inheritance;
(function (L10_Skipiste_Inheritance) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let skiers = [];
    let snowflakes = [];
    function handleLoad() {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Skipiste_Inheritance.crc = canvas.getContext("2d");
        L10_Skipiste_Inheritance.drawBackground();
        imageData = L10_Skipiste_Inheritance.crc.getImageData(0, 0, canvas.width, canvas.height);
        createObjects();
        window.setInterval(animate, 100);
    }
    function createObjects() {
        for (let i = 0; i < 12; i++) {
            let skier = new L10_Skipiste_Inheritance.Skier();
            skiers.push(skier);
        }
        for (let i = 0; i < 50; i++) {
            let snowflake = new L10_Skipiste_Inheritance.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    function animate() {
        L10_Skipiste_Inheritance.crc.clearRect(0, 0, L10_Skipiste_Inheritance.crc.canvas.width, L10_Skipiste_Inheritance.crc.canvas.height);
        L10_Skipiste_Inheritance.crc.putImageData(imageData, 0, 0);
        drawObjects();
        moveObjects();
    }
    function moveObjects() {
        for (let i = 0; i < skiers.length; i++) {
            skiers[i].move(1 / 50);
        }
        for (let i = 0; i < snowflakes.length; i++) {
            console.log("snowflake is moving");
            snowflakes[i].move(1 / 20);
        }
    }
    function drawObjects() {
        for (let i = 0; i < skiers.length; i++) {
            skiers[i].draw();
        }
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].draw();
        }
    }
})(L10_Skipiste_Inheritance || (L10_Skipiste_Inheritance = {}));
//# sourceMappingURL=main10.js.map