function newPlayableCharacter(xPos,yPos){
    const element = newimage('assets/static.gif')

        let target = null
        document.addEventListener('leftClick',target = mousePos)
    function moveCharacter(){
        
            let run = target.x - xPos
            let rise = target.y - yPos

            if(run.abs<10){
                xPos = target.x
            }else{
                xPos = xPos + 10 * (run/run.abs)
            }

            if(rise.abs<10){
                yPos = target.y
            }else{
                yPos = yPos + 10 * (rise/rise.abs)
            }

            element.style.left = xPos + 'px'
            element.style.left = ypos + 'px'
        
            console.log(xPos,yPos)
    }

    setInterval(moveCharacter,10)

    
 }