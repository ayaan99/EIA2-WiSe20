"use strict";
var L10_Skipiste_Inheritance;
(function (L10_Skipiste_Inheritance) {
    function drawBackground() {
        let gradient = L10_Skipiste_Inheritance.crc.createLinearGradient(0, 0, 0, L10_Skipiste_Inheritance.crc.canvas.height);
        gradient.addColorStop(0, "#58D3F7");
        gradient.addColorStop(0.5, "#A9E2F3");
        gradient.addColorStop(1, "white");
        L10_Skipiste_Inheritance.crc.fillStyle = gradient;
        L10_Skipiste_Inheritance.crc.fillRect(0, 0, L10_Skipiste_Inheritance.crc.canvas.width, L10_Skipiste_Inheritance.crc.canvas.height);
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 550, y: 125 }, { x: 300, y: 75 });
        drawHill();
        drawSkilift({ x: 800, y: 275 });
        drawLifthouse();
        drawTree();
    }
    L10_Skipiste_Inheritance.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 125;
        let gradient = L10_Skipiste_Inheritance.crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F2F5A9");
        gradient.addColorStop(1, "#F2F5A920");
        L10_Skipiste_Inheritance.crc.save();
        L10_Skipiste_Inheritance.crc.translate(_position.x, _position.y);
        L10_Skipiste_Inheritance.crc.fillStyle = gradient;
        L10_Skipiste_Inheritance.crc.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_Skipiste_Inheritance.crc.fill();
        L10_Skipiste_Inheritance.crc.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 50;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = L10_Skipiste_Inheritance.crc.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L10_Skipiste_Inheritance.crc.save();
        L10_Skipiste_Inheritance.crc.translate(_position.x, _position.y);
        L10_Skipiste_Inheritance.crc.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_Skipiste_Inheritance.crc.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_Skipiste_Inheritance.crc.translate(x, y);
            L10_Skipiste_Inheritance.crc.fill(particle);
            L10_Skipiste_Inheritance.crc.restore();
        }
        L10_Skipiste_Inheritance.crc.restore();
    }
    function drawHill() {
        L10_Skipiste_Inheritance.crc.beginPath();
        L10_Skipiste_Inheritance.crc.moveTo(0, 200);
        L10_Skipiste_Inheritance.crc.lineTo(1000, 575);
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.lineTo(1000, 700);
        L10_Skipiste_Inheritance.crc.lineTo(0, 700);
        L10_Skipiste_Inheritance.crc.fillStyle = "white";
        L10_Skipiste_Inheritance.crc.fill();
    }
    function drawSkilift(_position) {
        console.log(_position);
        L10_Skipiste_Inheritance.crc.beginPath();
        L10_Skipiste_Inheritance.crc.moveTo(100, 0);
        L10_Skipiste_Inheritance.crc.lineTo(1000, 350);
        L10_Skipiste_Inheritance.crc.lineWidth = 2;
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.save();
        L10_Skipiste_Inheritance.crc.translate(_position.x, _position.y);
        L10_Skipiste_Inheritance.crc.beginPath();
        L10_Skipiste_Inheritance.crc.moveTo(0, 0);
        L10_Skipiste_Inheritance.crc.lineTo(0, 50);
        L10_Skipiste_Inheritance.crc.lineTo(-50, 50);
        L10_Skipiste_Inheritance.crc.lineTo(-50, 75);
        L10_Skipiste_Inheritance.crc.lineWidth = 3;
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.restore();
    }
    function drawLifthouse() {
        L10_Skipiste_Inheritance.crc.fillStyle = "#B43104";
        L10_Skipiste_Inheritance.crc.fillRect(800, 525, 200, 175);
        L10_Skipiste_Inheritance.crc.strokeRect(800, 525, 200, 175);
        L10_Skipiste_Inheritance.crc.fillStyle = "#3B0B0B";
        L10_Skipiste_Inheritance.crc.fillRect(875, 575, 50, 125);
        L10_Skipiste_Inheritance.crc.beginPath();
        L10_Skipiste_Inheritance.crc.moveTo(800, 525);
        L10_Skipiste_Inheritance.crc.lineTo(900, 450);
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.lineTo(1000, 525);
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.closePath();
        L10_Skipiste_Inheritance.crc.fillStyle = "green";
        L10_Skipiste_Inheritance.crc.fill();
        L10_Skipiste_Inheritance.crc.fillStyle = "black";
        L10_Skipiste_Inheritance.crc.font = "40px sans-serif";
        L10_Skipiste_Inheritance.crc.fillText("SKI-LIFT", 825, 570);
    }
    function drawTree() {
        L10_Skipiste_Inheritance.crc.beginPath();
        L10_Skipiste_Inheritance.crc.moveTo(0, 300);
        L10_Skipiste_Inheritance.crc.lineTo(100, 450);
        L10_Skipiste_Inheritance.crc.lineTo(50, 450);
        L10_Skipiste_Inheritance.crc.lineTo(150, 600);
        L10_Skipiste_Inheritance.crc.lineTo(100, 600);
        L10_Skipiste_Inheritance.crc.lineTo(200, 750);
        L10_Skipiste_Inheritance.crc.lineTo(0, 750);
        L10_Skipiste_Inheritance.crc.closePath();
        L10_Skipiste_Inheritance.crc.stroke();
        L10_Skipiste_Inheritance.crc.fillStyle = "#0B610B";
        L10_Skipiste_Inheritance.crc.fill();
    }
})(L10_Skipiste_Inheritance || (L10_Skipiste_Inheritance = {}));
//# sourceMappingURL=background10.js.map