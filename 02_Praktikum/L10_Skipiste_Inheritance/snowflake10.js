"use strict";
var L10_Skipiste_Inheritance;
(function (L10_Skipiste_Inheritance) {
    class Snowflake {
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else {
                this.position = new L10_Skipiste_Inheritance.Vector(800, 600);
                this.position.random(800, 600);
            }
            if (_size)
                this.size = _size;
            else
                this.size = Math.random() * (3 - 0.1) + 0.1;
            this.velocity = new L10_Skipiste_Inheritance.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        move(_timeslice) {
            // console.log("snowflake is moving");
            let offset = new L10_Skipiste_Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Skipiste_Inheritance.crc.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Skipiste_Inheritance.crc.canvas.height;
            if (this.position.x > L10_Skipiste_Inheritance.crc.canvas.width)
                this.position.x -= L10_Skipiste_Inheritance.crc.canvas.width;
            if (this.position.y > L10_Skipiste_Inheritance.crc.canvas.height)
                this.position.y -= L10_Skipiste_Inheritance.crc.canvas.height;
        }
        draw() {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radiusSnowflake = Math.random() * 2.5 + 1;
            L10_Skipiste_Inheritance.crc.beginPath();
            L10_Skipiste_Inheritance.crc.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            L10_Skipiste_Inheritance.crc.fillStyle = "white";
            L10_Skipiste_Inheritance.crc.fill();
        }
    }
    L10_Skipiste_Inheritance.Snowflake = Snowflake;
})(L10_Skipiste_Inheritance || (L10_Skipiste_Inheritance = {}));
//# sourceMappingURL=snowflake10.js.map