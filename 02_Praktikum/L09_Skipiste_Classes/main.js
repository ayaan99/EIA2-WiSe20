"use strict";
var L09_Skipiste_Classes;
(function (L09_Skipiste_Classes) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let skiers = [];
    let snowflakes = [];
    function handleLoad() {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Skipiste_Classes.crc = canvas.getContext("2d");
        L09_Skipiste_Classes.drawBackground();
        imageData = L09_Skipiste_Classes.crc.getImageData(0, 0, canvas.width, canvas.height);
        createObjects();
        window.setInterval(animate, 100);
    }
    function createObjects() {
        for (let i = 0; i < 12; i++) {
            let skier = new L09_Skipiste_Classes.Skier();
            skiers.push(skier);
        }
        for (let i = 0; i < 250; i++) {
            let snowflake = new L09_Skipiste_Classes.Snowflake();
            snowflakes.push(snowflake);
        }
    }
    function animate() {
        L09_Skipiste_Classes.crc.clearRect(0, 0, L09_Skipiste_Classes.crc.canvas.width, L09_Skipiste_Classes.crc.canvas.height);
        L09_Skipiste_Classes.crc.putImageData(imageData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < skiers.length; i++) {
            skiers[i].move(1 / 50);
        }
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].move(1 / 50);
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
})(L09_Skipiste_Classes || (L09_Skipiste_Classes = {}));
//# sourceMappingURL=main.js.map