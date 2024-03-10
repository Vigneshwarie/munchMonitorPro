import React from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../assets/styles/Profile.css';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutation';

export default function Profile() {
     const [userFormData, setUserFormData] = useState({
          pet_name: '',
          pet_type: '',
          pet_sex: '',
          pet_notes: '',
     });

     const [validated] = useState(false);
     const [showAlert, setShowAlert] = useState(false);
     const [addPet, { error }] = useMutation(ADD_PET);

     useEffect(() => {
          if (error) {
               setShowAlert(true);
          } else {
               setShowAlert(false);
          }
    }, [error]);

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setUserFormData({ ...userFormData, [name]: value });
     };

     const handleFormSubmit = async (event) => { 
          event.preventDefault(); 
          const form = event.currentTarget;

          if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
          }

          try {
               const { data } = await addPet({
                    variables: { ...userFormData },
               });
               console.log(data);
          } catch (err) {
               console.log(err);
          }

          setUserFormData({
               pet_name: '',
               pet_type: '',
               pet_sex: '',
               pet_notes: '',
          });
     };

     function onCancelbtn() {
          window.location.assign('/homepage');
     }

     return (
          <>
               <div>
                    <h1>Pet Profile</h1>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                              Error while saving the Pet info!
                         </Alert>

                         <Form.Group className='mb-3'>
                              <Form.Control
                              type='text'
                              placeholder="Pet's Name"
                              name='pet_name'
                              onChange={handleInputChange}
                              value={userFormData.pet_name}
                              required
                              />
                              <Form.Control.Feedback type='invalid'>Pet name is required!</Form.Control.Feedback>
                         </Form.Group>

                         <Form.Group className='mb-3'> 
                              <Form.Control as="select" name='pet_type'
                                   onChange={handleInputChange}> 
                                   <option defaultValue={""}>Choose Pet Type</option>
                                   <option value="Cat">Cat</option> 
                                   <option value="Dog">Dog</option> 
                                   <option value="Bird">Bird</option> 
                                   <option value="Turtle">Turtle</option> 
                                   <option value="Hamster">Hamster</option> 
                              </Form.Control> 
                         </Form.Group> 

                         <Form.Group className='mb-3'> 
                              <Form.Control as="select" name='pet_sex'
                                   onChange={handleInputChange}> 
                                   <option defaultValue={""}>Choose Pet Sex</option>
                                   <option value="Male">Male</option> 
                                   <option value="Female">Female</option> 
                              </Form.Control> 
                         </Form.Group> 

                         <Form.Group className='mb-3'> 
                              <Form.Control name='pet_notes' as='textarea' rows="5"
                              placeholder="Pet's Notes">
                              </Form.Control> 
                         </Form.Group> 

                         <br />
                         <Button
                          disabled={!(userFormData.pet_name)}
                         type='submit' className="savebutton"> Save Pet </Button>
                         <Button type='button' className="cancelbutton" onClick={onCancelbtn}>Cancel</Button>
                         <br />      
                    </Form>
               </div>
          </>
     );
}