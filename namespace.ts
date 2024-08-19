namespace Utility {
    export function calculateRectangleArea(width: number, height: number): number {
        return width * height;
    }

    export function calculateCircleArea(radius: number): number {
        return Math.PI * radius * radius;
    }
}
let resu=Utility.calculateCircleArea(5)
console.log(resu.toFixed());
