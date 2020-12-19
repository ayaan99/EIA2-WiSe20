"use strict";
var L09_Skipiste_Classes;
(function (L09_Skipiste_Classes) {
    function drawBackground() {
        let gradient = L09_Skipiste_Classes.crc.createLinearGradient(0, 0, 0, L09_Skipiste_Classes.crc.canvas.height);
        gradient.addColorStop(0, "#58D3F7");
        gradient.addColorStop(0.5, "#A9E2F3");
        gradient.addColorStop(1, "white");
        L09_Skipiste_Classes.crc.fillStyle = gradient;
        L09_Skipiste_Classes.crc.fillRect(0, 0, L09_Skipiste_Classes.crc.canvas.width, L09_Skipiste_Classes.crc.canvas.height);
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 550, y: 125 }, { x: 300, y: 75 });
        drawHill();
        drawSkilift({ x: 800, y: 275 });
        drawLifthouse();
        drawTree();
    }
    L09_Skipiste_Classes.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 125;
        let gradient = L09_Skipiste_Classes.crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F2F5A9");
        gradient.addColorStop(1, "#F2F5A920");
        L09_Skipiste_Classes.crc.save();
        L09_Skipiste_Classes.crc.translate(_position.x, _position.y);
        L09_Skipiste_Classes.crc.fillStyle = gradient;
        L09_Skipiste_Classes.crc.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Skipiste_Classes.crc.fill();
        L09_Skipiste_Classes.crc.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 50;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = L09_Skipiste_Classes.crc.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Skipiste_Classes.crc.save();
        L09_Skipiste_Classes.crc.translate(_position.x, _position.y);
        L09_Skipiste_Classes.crc.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Skipiste_Classes.crc.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L09_Skipiste_Classes.crc.translate(x, y);
            L09_Skipiste_Classes.crc.fill(particle);
            L09_Skipiste_Classes.crc.restore();
        }
        L09_Skipiste_Classes.crc.restore();
    }
    function drawHill() {
        L09_Skipiste_Classes.crc.beginPath();
        L09_Skipiste_Classes.crc.moveTo(0, 200);
        L09_Skipiste_Classes.crc.lineTo(1000, 575);
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.lineTo(1000, 700);
        L09_Skipiste_Classes.crc.lineTo(0, 700);
        L09_Skipiste_Classes.crc.fillStyle = "white";
        L09_Skipiste_Classes.crc.fill();
    }
    function drawSkilift(_position) {
        console.log(_position);
        L09_Skipiste_Classes.crc.beginPath();
        L09_Skipiste_Classes.crc.moveTo(100, 0);
        L09_Skipiste_Classes.crc.lineTo(1000, 350);
        L09_Skipiste_Classes.crc.lineWidth = 2;
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.save();
        L09_Skipiste_Classes.crc.translate(_position.x, _position.y);
        L09_Skipiste_Classes.crc.beginPath();
        L09_Skipiste_Classes.crc.moveTo(0, 0);
        L09_Skipiste_Classes.crc.lineTo(0, 50);
        L09_Skipiste_Classes.crc.lineTo(-50, 50);
        L09_Skipiste_Classes.crc.lineTo(-50, 75);
        L09_Skipiste_Classes.crc.lineWidth = 3;
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.restore();
    }
    function drawLifthouse() {
        L09_Skipiste_Classes.crc.fillStyle = "#B43104";
        L09_Skipiste_Classes.crc.fillRect(800, 525, 200, 175);
        L09_Skipiste_Classes.crc.strokeRect(800, 525, 200, 175);
        L09_Skipiste_Classes.crc.fillStyle = "#3B0B0B";
        L09_Skipiste_Classes.crc.fillRect(875, 575, 50, 125);
        L09_Skipiste_Classes.crc.beginPath();
        L09_Skipiste_Classes.crc.moveTo(800, 525);
        L09_Skipiste_Classes.crc.lineTo(900, 450);
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.lineTo(1000, 525);
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.closePath();
        L09_Skipiste_Classes.crc.fillStyle = "green";
        L09_Skipiste_Classes.crc.fill();
        L09_Skipiste_Classes.crc.fillStyle = "black";
        L09_Skipiste_Classes.crc.font = "40px sans-serif";
        L09_Skipiste_Classes.crc.fillText("SKI-LIFT", 825, 570);
    }
    function drawTree() {
        L09_Skipiste_Classes.crc.beginPath();
        L09_Skipiste_Classes.crc.moveTo(0, 300);
        L09_Skipiste_Classes.crc.lineTo(100, 450);
        L09_Skipiste_Classes.crc.lineTo(50, 450);
        L09_Skipiste_Classes.crc.lineTo(150, 600);
        L09_Skipiste_Classes.crc.lineTo(100, 600);
        L09_Skipiste_Classes.crc.lineTo(200, 750);
        L09_Skipiste_Classes.crc.lineTo(0, 750);
        L09_Skipiste_Classes.crc.closePath();
        L09_Skipiste_Classes.crc.stroke();
        L09_Skipiste_Classes.crc.fillStyle = "#0B610B";
        L09_Skipiste_Classes.crc.fill();
    }
})(L09_Skipiste_Classes || (L09_Skipiste_Classes = {}));
//# sourceMappingURL=background.js.map