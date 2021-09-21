


export const Header = (array) => {

    const divHeader = document.createElement('div')

    const name = document.createElement('p')
    name.textContent = `Vlasnik je: ${array.ceo}`

    const yearFounded = document.createElement('p')
    yearFounded.textContent = `Godina osnivanja je: ${array.founded}`
    const address = document.createElement('p')
    address.textContent = `Address: ${array.headquarters.address}`

    const city = document.createElement('p')
    city.textContent = `City: ${array.headquarters.city}`

    const state = document.createElement('p')
    state.textContent = `State: ${array.headquarters.state}`

    divHeader.append(name, yearFounded, address, city, state)

    return divHeader
}




