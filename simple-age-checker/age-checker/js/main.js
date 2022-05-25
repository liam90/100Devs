//Create a conditonal that checks their age

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector('#check').addEventListener('click', checkAge)
function checkAge(userInput) {
  const age = document.querySelector('#userInput').value
  if(age < 16) {
    document.querySelector('#placeResultHere').innerHTML = 'You can not drive'
  } else if(age < 18) {
    document.querySelector('#placeResultHere').innerHTML = 'You can\'t hate from outside the club, beacuse they can\'t get in'
  } else if(age < 21) {
    document.querySelector('#placeResultHere').innerHTML = 'You can not drink'
  } else if(age < 25) {
    document.querySelector('#placeResultHere').innerHTML = 'You can not rent cars affordably'
  } else if(age < 30) {
    document.querySelector('#placeResultHere').innerHTML = 'There is nothing left to look forward too, which is a lie !'
  } else if(age <= 30 || age > 30) {
    document.querySelector('#placeResultHere').innerHTML = 'You can not rent fancy cars affordably'
  }
}
  
//--- Harder
//On click of the button
//Take the value from the input
//Place the result of the conditional in the paragraph
