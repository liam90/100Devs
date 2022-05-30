const spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
}

// Create two variables to store the value of numCrew and flightPath using the dot notation.
const crewCount = spaceship.numCrew
const planetArray = spaceship.flightPath
// Print both new variables to the DOM
document.querySelector('#crew').innerHTML = `The crew count is: ${crewCount} crew members.<br><br>`
document.querySelector('#path').innerHTML = `The flight path will be: ${planetArray.join(', ')}.`