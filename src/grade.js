"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const totalGrade = parseFloat(prompt('enter your mark'));
let gradeRange = Math.floor(totalGrade / 10);
let grade;
switch (gradeRange) {
    case 10: // For marks 100%
    case 9: // For marks between 90 and 99
        grade = 'A';
        break;
    case 8: // For marks between 80 and 89
        grade = 'B';
        break;
    case 7: // For marks between 70 and 79
        grade = 'C';
        break;
    case 6: // For marks between 60 and 69
        grade = 'D';
        break;
    case 5: // For marks between 50 and 59
        grade = 'E';
        break;
    default: // For marks below 50
        grade = 'Failed';
        break;
}
console.log(`your grade is ${grade}`);
