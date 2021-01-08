"use strict";
var L10_Skipiste_Inheritance;
(function (L10_Skipiste_Inheritance) {
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
            L10_Skipiste_Inheritance.crc.save();
            L10_Skipiste_Inheritance.crc.translate(x, y);
            L10_Skipiste_Inheritance.crc.rotate(20 * Math.PI / 180);
            L10_Skipiste_Inheritance.crc.beginPath();
            L10_Skipiste_Inheritance.crc.arc(0, 0, radius, 0, 2 * Math.PI);
            L10_Skipiste_Inheritance.crc.fillStyle = randomColor;
            L10_Skipiste_Inheritance.crc.fill();
            L10_Skipiste_Inheritance.crc.beginPath();
            L10_Skipiste_Inheritance.crc.moveTo(0, 0);
            L10_Skipiste_Inheritance.crc.lineTo(20, 50);
            L10_Skipiste_Inheritance.crc.lineTo(-20, 50);
            L10_Skipiste_Inheritance.crc.closePath();
            L10_Skipiste_Inheritance.crc.fillStyle = randomColor;
            L10_Skipiste_Inheritance.crc.fill();
            L10_Skipiste_Inheritance.crc.translate(0, 50);
            L10_Skipiste_Inheritance.crc.beginPath();
            L10_Skipiste_Inheritance.crc.moveTo(0, 0);
            L10_Skipiste_Inheritance.crc.lineTo(0, 25);
            L10_Skipiste_Inheritance.crc.stroke();
            L10_Skipiste_Inheritance.crc.translate(0, 25);
            L10_Skipiste_Inheritance.crc.beginPath();
            L10_Skipiste_Inheritance.crc.moveTo(-25, 0);
            L10_Skipiste_Inheritance.crc.lineTo(25, 0);
            L10_Skipiste_Inheritance.crc.lineTo(45, -20);
            L10_Skipiste_Inheritance.crc.stroke();
            L10_Skipiste_Inheritance.crc.restore();
        }
    }
    L10_Skipiste_Inheritance.Skier = Skier;
})(L10_Skipiste_Inheritance || (L10_Skipiste_Inheritance = {}));
//# sourceMappingURL=skier10.js.map