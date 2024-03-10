import createPetPro from '../assets/createpetprobutton.png'
import { Card, Media, Content, Heading } from 'react-bulma-components'
import Mypets from '../assets/mypets.png';
import PetCard from '../components/PetCard';

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

// search book from Mongo DB 


function Homepage() {

    const [userFormData, setUserFormData] = useState({
        pet_name: '',
        pet_type: '',
        pet_sex: '',
        pet_notes: ''
    });

    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);



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

export default Homepage;