let total = 0

document.querySelector('#makeZero').addEventListener('click', clearCalc)
document.querySelector('#num1').addEventListener('click', input1)
document.querySelector('#addNine').addEventListener('click', add9)
document.querySelector('#minusTwo').addEventListener('click', sub2)

function clearCalc() {
  total = 0
  document.querySelector('#Result').innerText = total
}

function input1() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#Result').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#Result').innerHTML = total
}
