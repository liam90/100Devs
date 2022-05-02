let total = 0

document.querySelector('#makeZero').addEventListener('click', clearCalc)
document.querySelector('#num1').addEventListener('click', input1)
document.querySelector('#num2').addEventListener('click', input2)
document.querySelector('#num3').addEventListener('click', input3)
document.querySelector('#num4').addEventListener('click', input4)
document.querySelector('#num5').addEventListener('click', input5)
document.querySelector('#num6').addEventListener('click', input6)
document.querySelector('#num7').addEventListener('click', input7)
document.querySelector('#num8').addEventListener('click', input8)
document.querySelector('#num9').addEventListener('click', input9)
document.querySelector('#num0').addEventListener('click', input0)
document.querySelector('#plus').addEventListener('click', addition)
document.querySelector('#minus').addEventListener('click', subtraction)
document.querySelector('#divide').addEventListener('click', division)
document.querySelector('#multiply').addEventListener('click', multiplication)
document.querySelector('#solve').addEventListener('click', equals)
document.querySelector('#percent').addEventListener('click', percentOf)
document.querySelector('#decimal').addEventListener('click', decimalPoint)
document.querySelector('#posNeg').addEventListener('click', plusOrMinus)

function clearCalc() {
  total = 0
  document.querySelector('#Result').innerText = total
}
function input1() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function input2() {
  total = total + 2
  document.querySelector('#Result').innerText = total
}
function input3() {
  total = total + 3
  document.querySelector('#Result').innerText = total
}
function input4() {
  total = total + 4
  document.querySelector('#Result').innerText = total
}
function input5() {
  total = total + 5
  document.querySelector('#Result').innerText = total
}
function input6() {
  total = total + 6
  document.querySelector('#Result').innerText = total
}
function input7() {
  total = total + 7
  document.querySelector('#Result').innerText = total
}
function input8() {
  total = total + 8
  document.querySelector('#Result').innerText = total
}
function input9() {
  total = total + 9
  document.querySelector('#Result').innerText = total
}
function input0() {
  total = total + 0
  document.querySelector('#Result').innerText = total
}
function addition() {
  total = + total 
  document.querySelector('#Result').innerText = total
}
function subtraction() {
total = - total
document.querySelector('#Result').innerText = total
}
function division() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function multiplication() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function equals() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function percentOf() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function decimalPoint() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}
function plusOrMinus() {
  total = total + 1
  document.querySelector('#Result').innerText = total
}

