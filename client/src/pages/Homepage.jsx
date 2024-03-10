import createPetPro from '../assets/createpetprobutton.png'
import { Card, Media, Content, Heading } from 'react-bulma-components'
import Mypets from '../assets/mypets.png';
import PetCard from '../components/PetCard';

import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <Link to="/profile">
                <img src={createPetPro} className="createbutton" />
            </Link>
            <div></div>
            <img src={Mypets} className="mypetspic" />
            <PetCard />
        </>
    );
}