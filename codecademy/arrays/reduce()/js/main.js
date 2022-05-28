const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // console.log(`The value of accumulator: ${accumulator}`)
  // console.log(`The value of currentValue: ${currentValue}`)
  // console.log(`The total current sum: ${accumulator + currentValue}`)
  // return accumulator + currentValue
  document.write(`The value of accumulator is: ${accumulator}<br><br>`)
  document.write(`The value of currentValue is: ${currentValue}<br><br>`)
  document.write(`The value of accumulator is: ${accumulator + currentValue}<br><br>`)
  return accumulator + currentValue
}, 10)
// console.log(newSum)