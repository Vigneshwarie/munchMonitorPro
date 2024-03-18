import meetdevs from '../assets/meetdevs.png'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
        <Link to = "./Devs">    
        <img src={meetdevs} className="meetdevs" />
        </Link>
        </>
    )
}