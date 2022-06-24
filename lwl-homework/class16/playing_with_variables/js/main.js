// CODING TIME!

// 1. Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
const askUserName = fName => {
    fName = String(prompt('Hey, whats your Name ?'))
    return console.log(`Nice to meet you ${fName}!`)
}

// askUserName()

// 2. Final values
// Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1;
a++; // 2
let b = 8;
b += 2; // 10
const c = a + b * b;  // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g);

// Check your prediction by executing it.

// 3. VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

const convert = () => {
    const userInput = document.querySelector('#userTemp').value
    const convertedTemp = userInput * 9/5 + 32
    return console.log(convertedTemp);
}
document.querySelector('#btn').addEventListener('click ', convert)