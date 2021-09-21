import axios from 'axios'



const BASE = 'https://api.spacexdata.com/v4'
const STARLINK = '/starlink'
const ONEROCKET = '/rockets'
const NEXTLAUNCH = '/launches/next'
const INFO = '/company'



export const getStarlink = () => axios.get(BASE+STARLINK)


export const infoCompany = () => axios.get(BASE+INFO)


export const upcomingLaunch = () => axios.get(BASE+NEXTLAUNCH)


export const rocketOne = () => axios.get(BASE+ONEROCKET)







