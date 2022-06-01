//---Easy
//create a function that subtracts two numbers and alerts the difference
const subTwoNumbers = (num1,num2) => alert(num1 - num2)
subTwoNumbers(12,6)

//create a function that divides three numbers and console logs the quotient
const divideThreeNumbers = (num1,num2,num3) => console.log(num1 / num2 / num3)
divideThreeNumbers(12,2,3)

//create a function that multiplys three numbers and returns the product
const multiplyThreeReturn = (num1,num2,num3) => { 
  const product = num1 * num2 * num3
  document.querySelector('#placeProduct').innerHTML = `This is the product for the function multiplyThreeReturn: ${product}`
}
multiplyThreeReturn(12,2,3)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
const threeNumbersReturn = (num1,num2,num3) => {
  const remainder = (num1 + num2) % num3
  document.querySelector('#placeRemainder').innerHTML = `This is the remainder of the function threeNumbersReturn: ${remainder}`
}
threeNumbersReturn(12,9,3)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
const fourNumbersIfStatement = (num1,num2,num3,num4) => {
  if(num1 * num2 > 100){
   const greaterThan100 =  num1 * num2 + num3 + num4
    document.querySelector('#placeGreater').innerHTML = `This is the result for being greater than 100: ${greaterThan100}`
  } else if(num1 * num2 < 100){
    const lessThan100 = num1 * num2 - num3 - num4
    document.querySelector('#placeLess').innerHTML = `This is the result for being less than 100: ${lessThan100}`
  }
}
fourNumbersIfStatement(12,12,4,5)
fourNumbersIfStatement(9,9,3,6)