"use strict";
var L09_Skipiste_Classes;
(function (L09_Skipiste_Classes) {
    class Skier {
        move(_timeslice) {
            // console.log("skier is moving");
        }
        draw() {
            let x = Math.random() * 800;
            let y = (Math.random() * 600) + 200;
            if (x > 450) {
                y = (Math.random() * 650) + 500;
            }
            let color = ["#ff0000", "#04B404", "#0000ff", "#DF7401", "#04B4AE", "#ff00bf"];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            let radius = 10;
            L09_Skipiste_Classes.crc.save();
            L09_Skipiste_Classes.crc.translate(x, y);
            L09_Skipiste_Classes.crc.rotate(20 * Math.PI / 180);
            L09_Skipiste_Classes.crc.beginPath();
            L09_Skipiste_Classes.crc.arc(0, 0, radius, 0, 2 * Math.PI);
            L09_Skipiste_Classes.crc.fillStyle = randomColor;
            L09_Skipiste_Classes.crc.fill();
            L09_Skipiste_Classes.crc.beginPath();
            L09_Skipiste_Classes.crc.moveTo(0, 0);
            L09_Skipiste_Classes.crc.lineTo(20, 50);
            L09_Skipiste_Classes.crc.lineTo(-20, 50);
            L09_Skipiste_Classes.crc.closePath();
            L09_Skipiste_Classes.crc.fillStyle = randomColor;
            L09_Skipiste_Classes.crc.fill();
            L09_Skipiste_Classes.crc.translate(0, 50);
            L09_Skipiste_Classes.crc.beginPath();
            L09_Skipiste_Classes.crc.moveTo(0, 0);
            L09_Skipiste_Classes.crc.lineTo(0, 25);
            L09_Skipiste_Classes.crc.stroke();
            L09_Skipiste_Classes.crc.translate(0, 25);
            L09_Skipiste_Classes.crc.beginPath();
            L09_Skipiste_Classes.crc.moveTo(-25, 0);
            L09_Skipiste_Classes.crc.lineTo(25, 0);
            L09_Skipiste_Classes.crc.lineTo(45, -20);
            L09_Skipiste_Classes.crc.stroke();
            L09_Skipiste_Classes.crc.restore();
        }
    }
    L09_Skipiste_Classes.Skier = Skier;
})(L09_Skipiste_Classes || (L09_Skipiste_Classes = {}));
//# sourceMappingURL=skier.js.map