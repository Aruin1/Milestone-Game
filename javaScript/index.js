// WIP
//let mousePos = {x: null, y: null}

// window.addEventListener('DOMContentLoaded', (event) => {let playArea = document.getElementById('play-area')
// if(playArea) 
// {playArea.addEventListener('mousemove', (event) => {
//   mousePos = { x: event.clientX, y: event.clientY };

//   console.log(mousePos.x, mousePos.y)
// })}})



//const pc = newPlayableCharacter(100,100)
// const target = newNonPlayableCharacter(500,500)

// End of WIP

const NPCs = []

const playerCharacter = document.createElement('img')
playerCharacter.src = "assests/PC.gif"
playerCharacter.style.position = 'absolute'
playerCharacter.style.left = '850px'
playerCharacter.style.top = '400px'
document.body.append(playerCharacter)

//temp npc create replace with object class/ function later
const exampleNPC = document.createElement('img')
exampleNPC.src = 'assests/NPC.gif'
exampleNPC.style.position = 'absolute'
exampleNPC.style.left = '400px'
exampleNPC.style.top = '400px'
exampleNPC.style.opacity = '0'
document.body.append(exampleNPC)

NPCs.push(exampleNPC)

const pingButton = document.getElementById('ping-button')

pingButton.addEventListener('click',() => ping(NPCs))


