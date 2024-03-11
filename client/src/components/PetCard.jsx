import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../assets/styles/Petcard.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PetImage from '../assets/petimage.png';
import feedbutt from '../assets/feedingbutt.png';
import editbutt from '../assets/editbutt.png';
import deletebutt from '../assets/deletebutt.png';
import genimage from '../assets/malesymbol.png';

import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
//import { DELETE_PET } from '../utils/mutations';

function PetCard() {

     const { loading, data } = useQuery(QUERY_USER);
     let userData = data?.user || {}
     // This returns data; however it also return empty objects.
     console.log(userData);


  
     return (
          <>
           
               
               <Card className="PetProCard" style={{ width: '35rem' }}>
                    <Card.Body>
                         <Card.Title>Some Title</Card.Title>
                         <Row>
                              <Col>
                                   <img src={PetImage} className="cardimg" />
                                   <strong>My Pet</strong>
                              </Col>
                              <Col>
                                   <img src={genimage} className="cardimg" />
                                   <strong>Gender</strong>
                              </Col>
                         </Row>
                         <br />
                         <Row>
                              <Col>
                                   <Button type='submit' className="editbutton" >
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
                              </Col>
                         </Row>
                    </Card.Body>
               </Card >
         
     </>
     );
}
export default PetCard;

