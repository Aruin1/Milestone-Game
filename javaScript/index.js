// main function here
let mousePos = {x: null, y: null}

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };

  console.log(mousePos.x, mousePos.y)
});




const pc = newPlayableCharacter(100,100)