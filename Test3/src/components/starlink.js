// 2. Print all StarLink satellites and enable selection of satellites based on version (object has version field)
// Print TLE_LINE0 and version



export const Starlink = (satelite) => {

    const divSat = document.createElement('div')


    const version = document.createElement('p')
    version.textContent = `${satelite.version}`

    const lineName = document.createElement('p')
    lineName.textContent = `${satelite.spaceTrack.TLE_LINE0}`


    divSat.append(document.createElement('hr'), version, lineName, document.createElement('hr'))

    return divSat

}

