//ASSIGNMENT
// 1. Print basic company data (Taken from API)
// -Name
// -Year of foundation
// -Full location (Address, Country, City)   --DONE


// 2. Print all StarLink satellites and enable selection of satellites based on version (object has version field)
// Print TLE_LINE0 and version  --DONE


// 3. Print the next launch
// -The picture
// -Name   --DONE


// 4. Based on task 3, print the appropriate rocket
// -Help: Use rocket id to retrieve the appropriate one from the server
// -The name of the rocket and one picture


// * Notes: -For the second task: - Without selection 60% points
//          -Manually adding options 30% points
//          -For the last task you can take any id (50% points)


//Usage of V4


import { getStarlink, infoCompany, upcomingLaunch, rocketOne } from "./service.js";
import { divSelect, header, buttonUpcoming, divLista } from "./constants.js";
import { Header } from "./components/header";
import { Starlinks } from "./components/starlinks.js";
import { Select } from "./components/select.js";
import { nextLaunch } from "./components/launch.js";


let info = []
let starlinks = []
let launches = []
let rockets = []


//Generating Select 
function generateSelect(starlinks){
    let filter = []
    divSelect.innerHTML = ''

    const select = Select(starlinks.map(starlink => starlink.version))

    select.addEventListener('change',()=>{
        filter = starlinks.filter(starlink => starlink.version == select.value)
        
        divLista.innerHTML = ''
        divLista.append(...Starlinks(filter))    
    })
    divSelect.append(select)
}




//Header company information
infoCompany().then(response => {
    //console.log(response);
    info = response.data
    header.append(Header(info))
})




//Generating satellites on DOM
getStarlink().then(response => {
    // console.log(response);
    starlinks = response.data
    divLista.innerHTML = ''
    divLista.append(...Starlinks(starlinks))
    generateSelect(starlinks)
})





//Generating the upcoming event on the click on the button
upcomingLaunch().then(response => {
    // console.log(response);
    launches = response.data
    //console.log(launches.rocket);
   

    buttonUpcoming.addEventListener('click', ()=> {
        
        let temp = launches.rocket
      
        divLista.innerHTML = ''
        divLista.append(nextLaunch(launches))
        
        rocketOne().then(response => {
            //console.log(response);
            //console.log(temp);

            let tmp=[]
            response.data.forEach(res => {
                tmp.push(res.id)
            })

         for(let i =0; i<= tmp.length; i++){
            
            if(temp == tmp[i]){    
                //I did not have enough time for taking care of this, for now I did it like this just to show something -- I had it select the ID of 2, sorry for this!
                //console.log('vezba');
                
                const divRocket = document.createElement('div')
                const nameRocket = document.createElement('p')
                nameRocket.textContent = `Rocket is: ${response.data[i].name}`

                const imgRocket = document.createElement('img')
                imgRocket.src = `${response.data[i].flickr_images[0]}`

                divRocket.append(nameRocket, imgRocket)
                divLista.append(divRocket)

            }

        } 
        })
        
   

    })


})







