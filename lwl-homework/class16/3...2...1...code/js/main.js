
// Let's put your brand new coding skills into practice.

// Presentation
// Write a program that displays your name and age.
const introduction = (fName,age) => console.log(`Hey, i'm ${fName} and I'm ${age}.`)
introduction('Liam',32)

// Minimalistic calculator
// Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.
const sixAndThree = () => {
  const userInput = document.querySelector('#userInput').value
  if(userInput === 'add'){
    console.log(6 + 3)
  }else if(userInput === 'subtract'){
    console.log(6 - 3)
  }else if(userInput === 'multiply'){
    console.log(6 * 3)
  }else if(userInput === 'divide'){
    console.log(6 / 3)
  }else{
    'Please input a number'
  }
}
document.querySelector('#btn').addEventListener('click', sixAndThree)

// Values prediction
// Observe the following program and try to predict the values it displays.

console.log(4 + 5); // 9
console.log("4 + 5"); // "4 + 5"
console.log("4" + "5"); // "45"
// Check your prediction by executing it.