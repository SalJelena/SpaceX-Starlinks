


export const nextLaunch = (array) => {

    const divLaunch = document.createElement('div')

    const launchName = document.createElement('p')
    launchName.textContent = `${array.name}`

    const img = document.createElement('img')
    img.src = `${array.links.patch.small?array.links.patch.small:'https://via.placeholder.com/150'}`

    divLaunch.append(launchName, img)

    return divLaunch

}