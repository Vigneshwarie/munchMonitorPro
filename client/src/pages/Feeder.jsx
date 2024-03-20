import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../assets/styles/Feeder.css";
import feedingschedule from "../assets/feedingschedule.png"

// images for containers
import breakfast from "../assets/breakfast.png"
import lunch from "../assets/lunch.png"
import dinner from "../assets/dinner.png"
import medicine from "../assets/meds.png"
import notes from "../assets/notes.png"
import petname from "../assets/petname.png"
import username from "../assets/username.png"
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PET } from '../utils/queries';



export default function Feeder() {
     const { id } = useParams();
     const { loading, data } = useQuery(QUERY_PET, {
          variables: {_id: id},
     });

     const petData = data?.pet || [];

     if(loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }

     return (
          <>
               <Container className="namecontainer" >
                    <Row>
                         <Col> <img src={username} /> { }</Col>
                    </Row>
               </Container>
               <Container className="namecontainer" >
                    <Row>
                         <Col> <img src={petname} /> {petData.pet_name}</Col>
                    </Row>
               </Container>

               <Container className="notecontainer" >
                    <Row>
                         <Col> <img src={notes} /> <br />{petData.pet_notes}</Col>
                    </Row>
               </Container>

               {/* Feeding Schedule */}
               <br />
               <img src={feedingschedule} />
               <br />


               {/* Breakfast section */}
               <Container className="breakfast">
                    <Row>
                         <Col xs={12}>
                              <img src={breakfast} className="feedertitleimage" />
                         </Col>
                    </Row>
                    <Row>
                         <Col md="auto">
                              <Form.Check type="radio" name="breakfasttype" label="Dry" value="Dry Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto" xs lg="2">
                              <Form.Check type="radio" name="breakfasttype" label="Wet" value="Wet Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check type="radio" name="breakfasttype" label="Both" value="Both" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check name="breakfastmedicine" className="feedercontrols" type="checkbox" label="Medicine" />
                         </Col>
                    </Row>
                    <Row>
                         <Col xs={12}>
                              <Button type='submit' className="feederfrmbutton"> Confirm Feeding </Button>
                         </Col>
                    </Row>
               </Container>

               {/* Lunch section */}
               <Container className="lunch" >
                    <Row>
                         <Col xs={12}>
                              <img src={lunch} className="feedertitleimage" />
                         </Col>
                    </Row>
                    <Row>
                         <Col md="auto">
                              <Form.Check type="radio" name="lunchtype" label="Dry" value="Dry Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto" xs lg="2">
                              <Form.Check type="radio" name="lunchtype" label="Wet" value="Wet Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check type="radio" name="lunchtype" label="Both" value="Both" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check name="lunchmedicine" className="feedercontrols" type="checkbox" label="Medicine" />
                         </Col>
                    </Row>
                    <Row>
                         <Col xs={12}>
                              <Button type='submit' className="feederfrmbutton"> Confirm Feeding </Button>
                         </Col>
                    </Row>
               </Container>

               {/* Dinner section */}
               <Container className="dinner" >
                    <Row>
                         <Col xs={12}>
                              <img src={dinner} className="feedertitleimage" />
                         </Col>
                    </Row>
                    <Row>
                         <Col md="auto">
                              <Form.Check type="radio" name="dinnertype" label="Dry" value="Dry Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto" xs lg="2">
                              <Form.Check type="radio" name="dinnertype" label="Wet" value="Wet Food" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check type="radio" name="dinnertype" label="Both" value="Both" className="feedercontrols" />
                         </Col>
                         <Col md="auto">
                              <Form.Check name="dinnermedicine" className="feedercontrols" type="checkbox" label="Medicine" />
                         </Col>
                    </Row>
                    <Row>
                         <Col xs={12}>
                              <Button type='submit' className="feederfrmbutton"> Confirm Feeding </Button>
                         </Col>
                    </Row>
               </Container>

               <Button type='button' className="cancelbutton" >Cancel</Button>
               <br />
          </>
     );
}


