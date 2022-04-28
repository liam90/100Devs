//Write your pseudo code first! 

// Creating a Temperature Converter C° > F°

// Temp convert: C° > F° = (C° * 1.8) + 32 = F°
// Temp convert: F° > C° = (F° - 32) / 1.8 = C°

// get temp
  // only on click
  document.querySelector('.btn').addEventListener('click', run)

function run() {
  // Get input ".user"
  // create a variable with the input value: "tempResult"
  let tempResult = document.querySelector('.user').value
// Convert the value
tempResult = `Temperature in F°: ${tempResult * 1.8 + 32}°`
// then display the result: ".result"
document.querySelector('.result').innerHTML = tempResult
}
