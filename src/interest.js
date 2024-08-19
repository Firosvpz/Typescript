"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let p = parseFloat(prompt('enter a principle amount :'));
let r = parseFloat(prompt('enter a interest rate :'));
let n = parseFloat(prompt('enter number of years :'));
const SI = (p * r * n) / 100;
console.log('Simple interest =', SI);
