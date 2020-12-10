"use strict";
var L08_Skipiste_Canvas;
(function (L08_Skipiste_Canvas) {
    window.addEventListener("load", handleLoad);
    let crc;
    function handleLoad() {
        console.log("start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc = canvas.getContext("2d");
        drawBackgroud();
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 550, y: 125 }, { x: 300, y: 75 });
        drawHill();
        drawSkilift({ x: 800, y: 250 });
        drawLifthouse();
        drawSkier({ x: 75, y: 150 }, { x: 150, y: 150 });
        drawTree();
        drawSnowflakes();
    }
    function drawBackgroud() {
        let gradient = crc.createLinearGradient(0, 0, 0, crc.canvas.height);
        gradient.addColorStop(0, "#58D3F7");
        gradient.addColorStop(0.5, "#A9E2F3");
        gradient.addColorStop(1, "white");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, crc.canvas.width, crc.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 125;
        let gradient = crc.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#F2F5A9");
        gradient.addColorStop(1, "#F2F5A920");
        crc.save();
        crc.translate(_position.x, _position.y);
        crc.fillStyle = gradient;
        crc.arc(0, 0, r2, 0, 2 * Math.PI);
        crc.fill();
        crc.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 50;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = crc.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.7)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc.save();
        crc.translate(_position.x, _position.y);
        crc.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc.translate(x, y);
            crc.fill(particle);
            crc.restore();
        }
        crc.restore();
    }
    function drawHill() {
        crc.beginPath();
        crc.moveTo(0, 200);
        crc.lineTo(1000, 575);
        crc.stroke();
        crc.lineTo(1000, 700);
        crc.lineTo(0, 700);
        crc.fillStyle = "white";
        crc.fill();
    }
    function drawSkilift(_position) {
        console.log(_position);
        crc.beginPath();
        crc.moveTo(100, 0);
        crc.lineTo(1000, 350);
        crc.lineWidth = 2;
        crc.stroke();
        crc.beginPath();
        crc.moveTo(800, 275);
        crc.lineTo(800, 325);
        crc.lineTo(750, 325);
        crc.lineTo(750, 350);
        crc.lineWidth = 3;
        crc.stroke();
        crc.save();
        crc.translate(_position.x, _position.y);
        for (let i = 0; i < 4; i++) {
            crc.save();
            _position.x += -100;
            _position.y += -50;
            crc.translate(_position.x, _position.y);
            crc.beginPath();
            crc.moveTo(0, 0);
            crc.lineTo(0, 50);
            crc.lineTo(-50, 50);
            crc.lineTo(-50, 75);
            crc.lineWidth = 3;
            crc.stroke();
            crc.restore();
            console.log(_position);
        }
        crc.restore();
    }
    function drawLifthouse() {
        crc.fillStyle = "#B43104";
        crc.fillRect(800, 525, 200, 175);
        crc.strokeRect(800, 525, 200, 175);
        crc.fillStyle = "#3B0B0B";
        crc.fillRect(875, 575, 50, 125);
        crc.beginPath();
        crc.moveTo(800, 525);
        crc.lineTo(900, 450);
        crc.stroke();
        crc.lineTo(1000, 525);
        crc.stroke();
        crc.closePath();
        crc.fillStyle = "green";
        crc.fill();
        crc.fillStyle = "black";
        crc.font = "40px sans-serif";
        crc.fillText("SKI-LIFT", 825, 570);
    }
    function drawTree() {
        crc.beginPath();
        crc.moveTo(0, 300);
        crc.lineTo(100, 450);
        crc.lineTo(50, 450);
        crc.lineTo(150, 600);
        crc.lineTo(100, 600);
        crc.lineTo(200, 750);
        crc.lineTo(0, 750);
        crc.closePath();
        crc.stroke();
        crc.fillStyle = "#0B610B";
        crc.fill();
    }
    function drawSkier(_position, _size) {
        let radius = 10;
        crc.save();
        for (let i = 0; i < 15; i++) {
            let color = ["#ff0000", "#04B404", "#0000ff", "#DF7401", "#04B4AE", "#ff00bf"];
            let randomColor = color[Math.floor(Math.random() * color.length)];
            let x = Math.random() * 800;
            let y = Math.random() * 350 + 300;
            crc.save();
            crc.translate(x, y);
            crc.rotate(20 * Math.PI / 180);
            crc.beginPath();
            crc.arc(0, 0, radius, 0, 2 * Math.PI);
            crc.fillStyle = randomColor;
            crc.fill();
            crc.beginPath();
            crc.moveTo(0, 0);
            crc.lineTo(20, 50);
            crc.lineTo(-20, 50);
            crc.closePath();
            crc.fillStyle = randomColor;
            crc.fill();
            crc.translate(0, 50);
            crc.beginPath();
            crc.moveTo(0, 0);
            crc.lineTo(0, 25);
            crc.stroke();
            crc.translate(0, 25);
            crc.beginPath();
            crc.moveTo(-25, 0);
            crc.lineTo(25, 0);
            crc.lineTo(45, -20);
            crc.stroke();
            crc.restore();
        }
        crc.restore();
    }
    function drawSnowflakes() {
        for (let i = 0; i < 300; i++) {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radiusSnowflake = Math.random() * 2.5 + 1;
            crc.beginPath();
            crc.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc.fillStyle = "white";
            crc.fill();
        }
    }
})(L08_Skipiste_Canvas || (L08_Skipiste_Canvas = {}));
//# sourceMappingURL=skipiste.js.map