import createPetPro from '../assets/createpetprobutton.png'
import { Card, Media, Content, Heading } from 'react-bulma-components'
import Mypets from '../assets/mypets.png';

export default function ViewCreate() {
    return (
        <>
            <h2>THIS IS THE VIEW/CREATE PAGE</h2>
            <  img src={createPetPro} className="createbutton" />
            <div></div>
            < img src={Mypets} className="mypetspic" />


        </>
    )
}