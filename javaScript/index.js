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

function createNPC(name,xCords,yCords,url,isTarget,home) {
  const image = document.createElement('img')
  image.src = url
  image.style.position = 'absolute'
  image.style.left = xCords + 'px'
  image.style.top = yCords + 'px'
  image.style.opacity = '0'
  document.body.append(image)
  home.push(image)

  return{
      image: image,
      isTarget: isTarget,
      name: name,
  }
}

const NPCs = []

const playerCharacter = document.createElement('img')
playerCharacter.src = "assests/PC.gif"
playerCharacter.style.position = 'absolute'
playerCharacter.style.left = '850px'
playerCharacter.style.top = '400px'
document.body.append(playerCharacter)



const newNPC = createNPC('NPC1',400,400,'assests/NPC.gif',true,NPCs)

console.log(NPCs)

const pingButton = document.getElementById('ping-button')

pingButton.addEventListener('click',() => ping(NPCs))


