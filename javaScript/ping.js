function ping (target){
    //set opasity to 1 for all array objects
    for (let index = 0; index < target.length; index++) {
      const element = target[index];
  
      element.style.opacity = '1'
      }
    //wait an amout of time
    setTimeout(() => {
      for (let index = 0; index < target.length; index++) {
        const element = target[index];
  
        element.style.opacity = '0'
      }
    }, 1500)
    //set all object back to opacity 0
  }