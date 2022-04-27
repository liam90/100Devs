document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value.ToLowerCase
  day = day.ToLowerCase
  //Conditionals go here
if(day === 'Tuesday' || day === "Thursday"){
  console.log('CLASS DAY !!!') // put into the DOM for HW
}else if(day === "Saturday" || day === "Sunday") {
  console.log('Weekend')
}else {
  console.log('BOOORINGGGGG')
}

}
