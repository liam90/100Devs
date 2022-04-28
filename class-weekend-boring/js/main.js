document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  
  if(day === 'tuesday' || day === "thursday"){
    document.querySelector('#placeToSee').innerHTML = 'CLASS TODAY !!!';
  }else if(day === "saturday" || day === "sunday") {
    document.querySelector('#placeToSee').innerHTML = 'Weekend !'
  }else {
    document.querySelector('#placeToSee').innerHTML = 'BBBOOORRRIINNNGGGG'
  }
}
// place response into the DOM for homework