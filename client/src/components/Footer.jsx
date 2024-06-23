import meetdevs from '../assets/meetdevs.png'
import { Link } from 'react-router-dom'
import ChatBox from '../components/ChatBox';
import Auth from '../utils/auth';


export default function Footer(){
    return(
        <>
            <Link to = "./Devs">    
                <img src={meetdevs} className="meetdevs" />
            </Link>
            {
                Auth.loggedIn() ? (
                <ChatBox />
                ) : null
            }
        </>
    )
}