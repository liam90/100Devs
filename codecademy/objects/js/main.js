// Creating an object and selecting its keys or key-value pairs from it

const spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
}

// Create two variables to store the value of numCrew and flightPath using the Dot Notation.

const crewCount = spaceship1.numCrew
const planetArray = spaceship1.flightPath

// Print both new variables to the DOM
document.querySelector('#crew').innerHTML = `The crew count is: ${crewCount} crew members.<br><br>`
document.querySelector('#path').innerHTML = `The flight path will be: ${planetArray.join(', ')}.`

// Now using Bracket Notation
// To use bracket notation to access an object’s property, we pass in the property name (key) as a string.
// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them.
// Without bracket notation in these situations, our code would throw an error.
// With bracket notation you can also use a variable inside the brackets to select the keys of an object.
// This can be especially helpful when working with functions

let returnAnyProp = (objectName, propName) =>document.querySelector('#planet').innerHTML = `The spaceships home planet is: ${objectName[propName]}`

returnAnyProp(spaceship1, 'homePlanet')

// Property Assignment
// Once we’ve defined an object, we’re not stuck with all the properties we wrote.
// Objects are mutable meaning we can update them after we create them!
// We can use either dot notation, ., or bracket notation, []
// and the assignment operator, = to add new key-value pairs to an object or change an existing property.

// It’s important to know that although we can’t reassign an object declared with const, we can still mutate it
// meaning we can add new properties and change the properties that are there.

// You can delete a property from an object with the delete operator.

const spaceship2 = {
  'Fuel Type': 'Turbo Fuel',
  homeplanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.'
}

//  Reassign color to be 'glorious gold'
spaceship2,color = 'glorious gold'
// Add a numEngines property with a number value between 1-10 
spaceship2.numEngines = 6
// Delete the 'Secret Mission' property
delete spaceship2['Secret Mission']

// Object Methods
// When the data stored on an object is a function we call that a method.
// A property is what an object has, while a method is what an object does.
// We can include methods in our object literals by creating ordinary, comma-separated key-value pairs.
// The key serves as our method’s name, while the value is an anonymous function expression.
// With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
// Object methods are invoked by appending the object’s name with the dot operator followed
// by the method name and parentheses

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'

const alienShip = {
  retreat() {
    document.querySelector('#retreat').innerHTML = retreatMessage
  },
  takeOff() {
    document.querySelector('#takeoff').innerHTML =  'Spim... Borp... Glix... Blastoff!'
  }
}

alienShip.retreat()
alienShip.takeOff()

// Nested Objects
// We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense
// to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left
// to right so that each operation starts to feel a little more manageable.

const spaceship3 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 


// Create a variable 'capFave' and assign the captain‘s 'favorite food' 
// (the element in the 0th index of her 'favorite foods' array) to it.
const capFave = spaceship3.crew.captain['favorite foods'][0]
console.log(capFave)

// Right now the passengers property has a value of null. Instead,
// assign as its value an array of objects. These objects should represent
// the spaceship‘s passengers as individual objects. Make at least one passenger object
// in the array that has at least one key-value pair on it.


// Create a variable firstPassenger and assign the first passenger as its value
// (the element in the 0th index of the spaceship.passengers array you just made).
// Make sure to use bracket and dot notation to get the passenger object through nested access
// (don’t just copy the object into the variable!)

