// main function here
let mousePos = null

const mousePosText = document.getElementById('mouse-pos');
mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
});

const pc = newPlayableCharacter(100,100)