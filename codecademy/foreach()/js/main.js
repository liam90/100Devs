// The .forEach() array method

const fruits = ['mango','papaya','pineapple','apple']

// Iterate over each array item and print 'I want to eat a' array element
fruits.forEach(pieceOfFruit => document.write(`I want to eat a ${pieceOfFruit}<br>`))


// The .map() method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])

document.write(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100)

document.write(smallNumbers)