import createPetPro from '../assets/createpetprobutton.png'
import { Card, Media, Content, Heading } from 'react-bulma-components'
import Mypets from '../assets/mypets.png';
import PetCard from '../components/PetCard'

export default function Homepage() {
    return (
        <>
            <img src={createPetPro} className="createbutton" />
            <div></div>
            <img src={Mypets} className="mypetspic" />
            <PetCard />
        </>
    )
}