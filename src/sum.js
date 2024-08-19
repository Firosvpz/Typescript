"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promt = (0, prompt_sync_1.default)();
let num1 = parseFloat(promt('enter a number :'));
let num2 = parseFloat(promt('enter a number :'));
let sum = num1 + num2;
console.log('total :', sum);
