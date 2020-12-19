"use strict";
var L09_Skipiste_Classes;
(function (L09_Skipiste_Classes) {
    class Snowflake {
        move(_timeslice) {
            // console.log("snowflake is moving");
        }
        draw() {
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let radiusSnowflake = Math.random() * 2.5 + 1;
            L09_Skipiste_Classes.crc.beginPath();
            L09_Skipiste_Classes.crc.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            L09_Skipiste_Classes.crc.fillStyle = "white";
            L09_Skipiste_Classes.crc.fill();
        }
    }
    L09_Skipiste_Classes.Snowflake = Snowflake;
})(L09_Skipiste_Classes || (L09_Skipiste_Classes = {}));
//# sourceMappingURL=snowflake.js.map