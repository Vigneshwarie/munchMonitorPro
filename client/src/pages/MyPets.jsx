import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/styles/Petcard.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PetImage from '../assets/petimage.png';
import feedbutt from '../assets/feedingbutt.png';
import editbutt from '../assets/editbutt.png';
import deletebutt from '../assets/deletebutt.png';
import maleSymbol from '../assets/malesymbol.png';
import femaleSymbol from '../assets/femalesymbol.png';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function PetCard(props) {
     return (
          <>
               <Card className="PetProCard" style={{ width: '35rem' }}>
                    <Card.Body>
                         <Card.Title>{props.pet_name}</Card.Title>
                         <Row>
                              <Col>
                                   <a href="/mypets">
                                        <img src={PetImage} className="cardimg" />
                                        <strong>My Pet</strong>
                                   </a>
                              </Col>
                           <Col>
                                <img src={props.pet_sex === 'Male' ? maleSymbol : femaleSymbol} className="cardimg" />
                                <strong>Gender</strong>
                           </Col>
                      </Row>
                      <br />
                      <Row>
                      <Col>
                                <Button type='submit' className="editbutton" >
                                  {/*  We can add a link like this to edit the pet information =>  <a href={`/edit/${props.pet_id}`}></a> */}
                                     <img src={editbutt} title="Edit Me" className="imgbutton" />
                                </Button>
                              
                           </Col>
                           <Col>
                                <Button type='submit' className="feedbutton">
                                     <img src={feedbutt} title="Feeding Schedule" className="imgbutton" />
                                </Button>
                           </Col>
                           <Col>
                                <Button type='submit' className="deletebutton">
                                     <img src={deletebutt} title="Delete Me" className="imgbutton" />
                                </Button>
                                {/* import your mutation to delete pet */}
                           </Col>
                      </Row>
                 </Card.Body>
            </Card >
      
  </>
  );
}

export default function MyPets() {
     const { loading, data } = useQuery(QUERY_USER);
     let petData = data?.user?.my_pets || {}
     console.log(petData);

     if(loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }
     return (
          <>
               <h2>Viewing Pets</h2>
               {petData.map((pet, idx) => {
                    return <PetCard key={idx} pet_name={pet.pet_name} pet_sex={pet.pet_sex} pet_type={ pet.pet_type} />
               })}

          </>
     )
}