import { nextLaunch } from "./launch.js";



export const Launches = (launches) => launches.map(launch => nextLaunch(launch))






