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