import promptSync from 'prompt-sync'
const prompt = promptSync()
const totalGrade: number = parseFloat(prompt('enter your mark'))
let gradeRange = Math.floor(totalGrade / 10)
let grade
switch (gradeRange) {
    case 10: // For marks 100%
    case 9:  // For marks between 90 and 99
        grade = 'A';
        break;
    case 8:  // For marks between 80 and 89
        grade = 'B';
        break;
    case 7:  // For marks between 70 and 79
        grade = 'C';
        break;
    case 6:  // For marks between 60 and 69
        grade = 'D';
        break;
    case 5:  // For marks between 50 and 59
        grade = 'E';
        break;
    default: // For marks below 50
        grade = 'Failed';
        break;
}
console.log(`your grade is ${grade}`);
