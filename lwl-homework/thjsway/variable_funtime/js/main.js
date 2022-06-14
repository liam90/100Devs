// Challenge 1.

// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
const ask = () => {
    let name = String(prompt('Hello, what is yout full name ?'))
    document.querySelector('#placeResult').innerHTML = name
}

ask()