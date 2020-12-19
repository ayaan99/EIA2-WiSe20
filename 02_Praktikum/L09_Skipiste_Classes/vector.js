"use strict";
var L09_Skipiste_Classes;
(function (L09_Skipiste_Classes) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    L09_Skipiste_Classes.Vector = Vector;
})(L09_Skipiste_Classes || (L09_Skipiste_Classes = {}));
//# sourceMappingURL=vector.js.map