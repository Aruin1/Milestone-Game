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