import { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import '../assets/styles/Profile.css';
import { useMutation } from '@apollo/client';
import { EDIT_PET } from '../utils/mutation';
import { useParams } from 'react-router-dom';

export default function Profile() {
     const [userFormData, setUserFormData] = useState({
          pet_notes: ''
     });

     const { id } = useParams();
     console.log(7777777, id);

     const [validated] = useState(false);
     const [showAlert, setShowAlert] = useState(false);
     const [editPet, { error }] = useMutation(EDIT_PET);

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
               console.log(6666);
               
               const { data } = await editPet({
                    variables: { _id: id, pet_notes: userFormData.pet_notes },
               });
               console.log(data);
               if (data) {
                    window.location.assign('/homepage');
               }
          } catch (err) {
               console.log(err);
          }
     };

     function onCancelbtn() {
          window.location.assign('/homepage');
     }

     return (
          <>
               <div>
                    <h1>Edit Pet Profile</h1>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                              Error while saving the Pet info!
                         </Alert>

                         <Form.Group className='mb-3'> 
                              <Form.Control name='pet_notes' as="textarea" rows="5"
                              placeholder="Pet's Notes" onChange={handleInputChange}>
                              </Form.Control> 
                         </Form.Group> 

                         <br />
                         <Button type='submit' className="savebutton"> Save Pet </Button>
                         <Button type='button' className="cancelbutton" onClick={onCancelbtn}>Cancel</Button>
                         <br />      
                    </Form>
               </div>
          </>
     );
}