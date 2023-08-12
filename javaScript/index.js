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

  return{
      image: image,
      isTarget: isTarget,
      name: name,
  }
}

function kill(NPC) {
  if(NPC.isTarget) {
      alert('target elimnated good job')
  }else{
      alert('non target eliminated better luck next time.')
  }
}

function addKill(NPCs) {
  for (let index = 0; index < NPCs.length; index++) {
    const element = NPCs[index];
    
    element.image.addEventListener('click',() => kill(element))
  }
}



const playerCharacter = document.createElement('img')
playerCharacter.src = "assests/player.png"
playerCharacter.style.position = 'absolute'
playerCharacter.style.left = '850px'
playerCharacter.style.top = '400px'
document.body.append(playerCharacter)



const NPC1 = createNPC('NPC1',1400,700,'assests/triangleNPC.png',true)
const NPC2 = createNPC('NPC1',400,400,'assests/triangleNPC.png',false)
const NPC3 = createNPC('NPC1',1500,300,'assests/septagonNPC.png',false)
const NPC4 = createNPC('NPC1',300,800,'assests/squareNPC.png',false)
const NPC5 = createNPC('NPC1',1400,800,'assests/squareNPC.png',false)

const NPCs = [NPC1,NPC2,NPC3,NPC4,NPC5]

addKill(NPCs)

//newNPC.image.addEventListener('click',() => kill(newNPC))

const pingButton = document.getElementById('ping-button')

pingButton.addEventListener('click',() => ping(NPCs))


