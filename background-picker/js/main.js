document.getElementById('reset').onclick = resetBackground
document.getElementById('space').onclick = partySpace
document.getElementById('ocean').onclick = partyOcean
document.getElementById('rainForest').onclick = partyRainForest
document.getElementById('waterFall').onclick = partyWaterFall


function resetBackground() {
  document.querySelector('#wrapper').style.background = 'none'
  document.querySelector('#wrapper').style.color = 'hsl(235, 64%, 18%)'
}

function partySpace() {
  document.querySelector('#wrapper').style.backgroundImage = 'url(assets/space.jpg)'
  document.querySelector('#wrapper').style.backgroundPosition = 'center'
  document.querySelector('#wrapper').style.backgroundSize = 'cover'
  document.querySelector('#wrapper').style.backgroundRepeat = 'no-repeat'
  document.querySelector('#wrapper').style.color = 'hsl(0, 0%, 100%)'
}

function partyOcean() {
  document.querySelector('#wrapper').style.backgroundImage = 'url(assets/ocean.jpg)'
  document.querySelector('#wrapper').style.backgroundPosition = 'center'
  document.querySelector('#wrapper').style.backgroundRepeat = 'no-repeat'
  document.querySelector('#wrapper').style.color = 'hsl(235, 64%, 18%)'
}

function partyRainForest() {
  document.querySelector('#wrapper').style.backgroundImage = 'url(assets/rain_forest.jpg)'
  document.querySelector('#wrapper').style.backgroundPosition = 'center'
  document.querySelector('#wrapper').style.backgroundSize = 'cover'
  document.querySelector('#wrapper').style.backgroundRepeat = 'no-repeat'
  document.querySelector('#wrapper').style.color = 'hsl(0, 0%, 100%)'
}

function partyWaterFall() {
  document.querySelector('#wrapper').style.backgroundImage = 'url(assets/waterfall.jpg)'
  document.querySelector('#wrapper').style.backgroundPosition = 'center'
  document.querySelector('#wrapper').style.backgroundSize = 'cover'
  document.querySelector('#wrapper').style.backgroundRepeat = 'no-repeat'
  document.querySelector('#wrapper').style.color = 'hsl(235, 64%, 18%)'
}
