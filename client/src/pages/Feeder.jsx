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
                    <Col> <img src={username} /> **name here**</Col>
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
          <Container className="breakfast" >
               <Row>
                      <Col><img src={breakfast} />
             
                    <Form.Check type="radio" aria-label="radio 1" name="breakfasttype" label="Dry Food" value="Dry Food"/> 
                    
                    <Form.Check type="radio" aria-label="radio 2" name="breakfasttype" value="Wet Food"/>Wet Food
                   
                    <Form.Check type="radio" aria-label="radio 3" name="breakfasttype" value="Both"/> Both


                    <img src={medicine} />
                    <Form.Check aria-label="option 1" className="medicine" />
               </Col>
               <Button
               // disabled={!(userFormData.first_name && userFormData.last_name && userFormData.email && userFormData.password)}
               type='submit'
               variant='danger'>
               Confirm Feeding
               </Button>
               </Row>
          </Container>



      {/* Lunch section */}
      <Container className="lunch" >
        <Row>
          <Col><img src={lunch} />
            <br />
            Dry Food
            <Form.Check type="radio" aria-label="radio 1" />

            Wet Food
            <Form.Check type="radio" aria-label="radio 2" />

            Both
            <Form.Check type="radio" aria-label="radio 3" />

            <br />

            <img src={medicine} />
            <Form.Check aria-label="option 1" className="medicine" />
          </Col>
          <Button
            // disabled={!(userFormData.first_name && userFormData.last_name && userFormData.email && userFormData.password)}
            type='submit'
            variant='danger'>
            Confirm Feeding
          </Button>
        </Row>
      </Container>


      {/* Dinner section */}
      <Container className="dinner" >
        <Row>
          <Col><img src={dinner} />
            <br />
            Dry Food
            <Form.Check type="radio" aria-label="radio 1" />

            Wet Food
            <Form.Check type="radio" aria-label="radio 2" />

            Both
            <Form.Check type="radio" aria-label="radio 3" />

            <br />

            <img src={medicine} />
            <Form.Check aria-label="option 1" className="medicine" />
          </Col>
          <Button
            // disabled={!(userFormData.first_name && userFormData.last_name && userFormData.email && userFormData.password)}
            type='submit'
            variant='danger'>
            Confirm Feeding
          </Button>
        </Row>
      </Container>

      <Button type='button' className="cancelbutton" >Cancel</Button>
      <br />
    </>
  )
}


