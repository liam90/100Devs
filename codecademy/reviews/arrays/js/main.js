
const netflixShows = ['Rangonrok','Witcher','The Originals']

// Using the .length method on my array
console.log(netflixShows)
// Using an unmentioned method on my array
console.log(netflixShows.join(', '))

// Creating a string with my array
const myNetflixShows = `The NetfFlix Shows im watching these days are:  ${netflixShows.join(', ')}`
console.log(myNetflixShows)

// Using the .push method to add an element to the end of my array
netflixShows.push('Seinfeld')
console.log(netflixShows)

// Nesting an array within my original array
shows = [['Ragonrok','Witcher'],'The Originals']
console.log(shows)

// Accessing an element in a nested array
console.log(shows[0][1])