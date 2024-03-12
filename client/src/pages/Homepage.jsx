import createPetPro from '../assets/createpetprobutton.png'
import Mypets from '../assets/mypets.png';
import error from '../pages/Error'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { DELETE_PET, EDIT_PET } from '../utils/mutation';

import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import '../assets/styles/Petcard.css'

import PetImage from '../assets/petimage.png';
import feedbutt from '../assets/feedingbutt.png';
import editbutt from '../assets/editbutt.png';
import deletebutt from '../assets/deletebutt.png';
import maleSymbol from '../assets/malesymbol.png';
import femaleSymbol from '../assets/femalesymbol.png';

function PetCard(props) {
     const [deletePet, { error }] = useMutation(DELETE_PET);

     const handleEditPet = async (petId) => {
          window.location.assign('/editPet/{petId}');
     };

      const handleFeedPet = async (petId) => {
          
     };

     const handleDeletePet = async (petId) => {
          console.log(123);
          console.log("Pet_id==", petId)
          const token = Auth.loggedIn() ? Auth.getToken() : null;

          if (!token) {
               return false;
          }

          try {
               const {data} = await deletePet({variables: {_id: petId}});
               console.log(data);
               window.location.assign('/homepage');
          } catch (err) {
               console.error(err);
          }
     };

     return (
          <>
               <Card className="PetProCard" style={{ width: '35rem'}}>
                    <Card.Body>
                         <Card.Title className='pettitle'>{props.pet_name}</Card.Title>
                         <Row>
                              <Col>
                                   <a href="/mypets">
                                        <img src={props.pet_type === 'Cat' ? PetImage : props.pet_type === 'Dog' ? feedbutt : props.pet_type === 'Bird' ? editbutt: deletebutt} className="cardimg" title={ "I'm a "+props.pet_type } />
                                   </a>
                              </Col>
                              <Col>
                                   <img src={props.pet_sex === 'Male' ? maleSymbol : femaleSymbol} className="cardimg" title={ "I'm a "+props.pet_sex} />
                              </Col>
                         </Row>
                         <br />
                         <Row>
                              <Col>
                                   <Button type='submit' className="feedbutton" onClick={() => handleFeedPet(props.pet_id)}>
                                             <img src={feedbutt} title="Feeding Schedule" className="imgbutton" />
                                   </Button>
                              </Col>
                              <Col>
                                   <Link to={`/editPet/${props.pet_id}`} className="editbutton">
                                        <img src={editbutt} title="Edit Me" className="imgbutton" />
                                   </Link>
                              </Col>
                              <Col>
                                   <Button type='submit' className="deletebutton" onClick={() => handleDeletePet(props.pet_id)}>
                                             <img src={deletebutt} title="Delete Me" className="imgbutton" />
                                   </Button>
                              </Col>
                         </Row>
                    </Card.Body>
               </Card >
               <br/>
          </>
     );
}


function Homepage() {
     const { loading, data } = useQuery(QUERY_USER);

     const petData = data?.user?.my_pets || [];
     console.log(96, data);

     if(loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }


    return (
        <>
            <Link to="/profile">
                <img src={createPetPro} className="createbutton" />
            </Link>
            <div></div>
              <img src={Mypets} className="mypetspic" />
              <div>
                   {petData.map((pet) => {
                        return <PetCard key={pet._id} pet_name={pet.pet_name} pet_sex={pet.pet_sex} pet_type={pet.pet_type} pet_id={ pet._id} />
                    })}
              </div>
        </>
    );
}

export default Homepage;