import React,  { useState, useEffect }  from "react";
import { Form, Button, Container, Row, Col, Alert} from 'react-bootstrap';
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
import { CREATE_FEEDER } from '../utils/mutation';



export default function Feeder() {
     const [showAlert, setShowAlert] = useState(false);
     const [createFeeder, { error }] = useMutation(CREATE_FEEDER);

     useEffect(() => {
          if (error) {
               setShowAlert(true);
          } else {
               setShowAlert(false);
          }
     }, [error]);
     

     const { id } = useParams();
     const { loading, data } = useQuery(QUERY_PET, {
          variables: { _id: id },
     });

     const petData = data?.pet || [];

     if (loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }

     const handleBreakfastSubmit = async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const breakfasttype = form.elements.breakfasttype.value;
          const breakfastmedicine = form.elements.breakfastmedicine.checked? "Yes" : "No";
     //     const lunchtype = form.elements.lunchtype.value;
      //    const lunchmedicine = form.elements.lunchmedicine.checked;
      //    const dinnertype = form.elements.dinnertype.value;
      //    const dinnermedicine = form.elements.dinnermedicine.checked;

          try {
               const { data } = await createFeeder({
                    variables: {
                         feed_date: new Date().toLocaleDateString("fr-CA", {year:"numeric", month: "2-digit", day:"2-digit"}),
                         pet_id: id,
                         breakfast_food_type: breakfasttype,
                         medicine_morning: breakfastmedicine,
                         lunch_food_type: '',
                         medicine_afternoon: '',
                         dinner_food_type: '',
                         medicine_evening: '' 
                    },
               });
               console.log("123456");
               console.log("in feeder====", data);
               if (data) {
                    window.location.assign('/homepage');
               }
          } catch (err) {
               console.log(err);
          }
     }

     function onCancelbtn() {
          window.location.assign('/homepage');
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
               <Form onSubmit={handleBreakfastSubmit}>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                         Error while saving the breakfast info!
                    </Alert>
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
               </Form>

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

               <Button type='button' className="cancelbutton" onClick={onCancelbtn}>Cancel</Button>
               <br />
          </>
     );
}


