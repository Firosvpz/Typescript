"use strict";
var Utility;
(function (Utility) {
    function calculateRectangleArea(width, height) {
        return width * height;
    }
    Utility.calculateRectangleArea = calculateRectangleArea;
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
    Utility.calculateCircleArea = calculateCircleArea;
})(Utility || (Utility = {}));
let resu = Utility.calculateCircleArea(5);
console.log(resu.toFixed());
