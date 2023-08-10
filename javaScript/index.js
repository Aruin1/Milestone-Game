// main function here
let mousePos = {x: null, y: null}

window.addEventListener('DOMContentLoaded', (event) => {let playArea = document.getElementById('play-area')
if(playArea) 
{playArea.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };

  console.log(mousePos.x, mousePos.y)
})}})



const pc = newPlayableCharacter(100,100)
const target = newNonPlayableCharacter(500,500)