// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let box = true
// alert(box)

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'green'
favColor = 'blue'
// console.log(favColor)
// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbers(num1,num2,num3,num4){
  let result = num1 * num2 * num3 / num4
  return result
}
// fourNumbers(2,2,2,3)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const powwwaaa = (num1,num2) => num1^num2
// console.log(`powwwaaa result is: ${powwwaaa(3,6)}`)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booleanString(boolean,string){
  if(boolean){
    alert(string)
  }else{
    console.log(string)
  }
}
// booleanString(true ,'Boolean: True')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
document.querySelector('#clickMe').addEventListener('click',fizzBuzz)
function fizzBuzz(){
let userInput = Number(document.querySelector('#userNum').value)
  for(let i = 1; i <= userInput; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz result: FizzBuzz')
    }else if(i % 3 === 0){
      console.log("FizzBuzz result: Fizz")
    }else if(i % 5 === 0){
      console.log("FizzBuzz result: Buzz")
    }else{
      console.log(`FizzBuzz result: ${i}`)
    }
  }
}