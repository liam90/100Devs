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
spaceship2.color = 'glorious gold'
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


// Looping through Objects
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Challenge 1.

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log()
// a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
for (let crewNameRoles in spaceship.crew) {
console.log(`${crewNameRoles}: ${spaceship.crew[crewNameRoles].name, spaceship.crew[crewNameRoles].name}`)
}

// Challenge 2.

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log()
// a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
for(let crewDegree in spaceship.crew) {
  console.log(`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`)
}

// The This Key Word

// The this keyword references the calling object which provides access to the calling object’s properties. In the example above,
// the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
// Let’s get comfortable using the this keyword in a method.

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
}
console.log(robot.provideInfo())

// Challenge 1.
// Let’s create a new object to practice using this. In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'.
// Add another property, energyLevel and assign to it a value of 100.

// Challenge 2.
// Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:
// `I am MODEL and my current energy level is ENERGYLEVEL.`  
// Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!

// Challenge 3.
// Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.


// Arrow Functions and Object Methods

// Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object,
// or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.
// The key takeaway from the example above is to avoid using arrow functions when using this in a method!

const robot2 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
robot2.checkEnergy()

// Challenge 1.
// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.
// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.
// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.


// Advanced Objects: Privacy
//  When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.
// Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
// One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000
}

// Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000



const robot3 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30
    console.log(`Recharged ! Energy level is currently at ${this._energyLevel}%`)
  }
}

robot3._energyLevel = 'high'

robot3.recharge()

// Challenge 1.
// Below the robot object, reassign the _energyLevel property to 'high'.

// Challenge 2.
// Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.
// What will happen now that _energyLevel isn’t a number?
// Call .recharge() on robot to find out.
// Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion.
// No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.


// Advanced Objects: Getters
// Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'DOE',
  get fullName() {
    if(this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`
    } else {
      return 'Missing a first name or last name.'
    }
  }
}
console.log(person.fullName)

// We use the get keyword followed by a function.
// We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
// We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
// In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
// Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

// Getters can perform an action on the data when getting a property.
// Getters can return different values using conditionals.
// In a getter, we can access the properties of the calling object using this.
// The functionality of our code is easier for other developers to understand.
// Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function.
// If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

const robot4 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
  if(typeof this._energyLevel === 'number') {
    return `My current energy level is: ${this._energyLevel}%`
    } else {
      return `System malfunction: cannot retrieve energy level.`
    }
  }
}
console.log(robot4.energyLevel)
// Challenges

// Challenge 1.
// In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

// Challenge 2.
// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'.
// Replace ENERGYLEVEL with the value of this._energyLevel.
// Make sure you return the string and not logging it to the console.

// Challenge 3.
//If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.
// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

//Challenge 4.
// Log the result of calling the getter method energyLevel on robot to the console.
// Notice that the method will return a formatted response rather than just accessing a property!


// Advanced Objects: Setters
// Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:

const person2 = {
  _age: 37,
  set age(newAge) {
    if(typeof newAge === 'number'){
      this._age = newAge
    } else {
      console.log(`You must assign a number to age`)
    }
  }
}
// We can perform a check for what value is being assigned to this._age.
// When we use the setter method, only values that are numbers will reassign this._age
// There are different outputs depending on what values are used to reassign this._age.
person2.age = 40
// console.log(person2._age)
person2.age = '40'
// console.log(person2._age)


const robot5 = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
};

// Challenges

// Challenge 1.
// Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.
// Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now

// Challenge 2.
// There are a couple of things we should do in the setter method:
// Add a check to see if num is a number using the typeof operator.
// num should also be greater than or equal to 0.
// If both conditions are met, reassign this._numOfSensors to num.

// Challenge 3.
// Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

// Challenge 4.
// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

// Challenge 5.
// To check that the setter method worked, console.log() robot.numOfSensors.
