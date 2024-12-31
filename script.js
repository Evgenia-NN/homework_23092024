// // Задание 1
// function compareNumbers(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a > b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// console.log(compareNumbers(3, 5));
// console.log(compareNumbers(5, 3));
// console.log(compareNumbers(4, 4));

// // Задание 2
// function factorial(n) {
//     if (n < 0) {
//         return null;
//     }

//     if (n === 0) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
    
//     return result;
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-3));

// // Задание 3
// function combineDigits(digit1, digit2, digit3) {
//     return Number('' + digit1 + digit2 + digit3);
// }

// console.log(combineDigits(1, 4, 9));
// console.log(combineDigits(2, 5, 3));
// console.log(combineDigits(0, 7, 8));

// // Задание 4
// function calculateArea(length, width) {
//     if (width === undefined) {
//         return length * length;
//     }
    
//     return length * width;
// }

// console.log(calculateArea(5));
// console.log(calculateArea(4, 6));

// // Задание 5
// function isPerfectNumber(num) {
//     if (num <= 1) {
//         return false;
//     }

//     let sum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }

// console.log(isPerfectNumber(6));  // true
// console.log(isPerfectNumber(28)); // true
// console.log(isPerfectNumber(12)); // false

// // Задание 6
// function isPerfectNumber(num) {
//     if (num <= 1) return false;

//     let sum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }

// function findPerfectNumbersInRange(min, max) {
//     const perfectNumbers = [];

//     for (let i = min; i <= max; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }

// const min = 1;
// const max = 10000;
// const perfectNumbers = findPerfectNumbersInRange(min, max);
// console.log(`Совершенные числа в диапазоне от ${min} до ${max}:`, perfectNumbers);

// // Задание 7
// function formatTime(hours, minutes = 0, seconds = 0) {
//     const formattedHours = String(hours).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(seconds).padStart(2, '0');

//     return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }
// console.log(formatTime(5));
// console.log(formatTime(5, 30));

// // Задание 8
// function timeToSeconds(hours, minutes, seconds) {
//     const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
//     return totalSeconds;
// }

// const hours = 1;
// const minutes = 30;
// const seconds = 45;

// const result = timeToSeconds(hours, minutes, seconds);
// console.log(result);

// Задание 9
function secondsToTimeString(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

const totalSeconds = 3661;
const result = secondsToTimeString(totalSeconds);
console.log(result);
