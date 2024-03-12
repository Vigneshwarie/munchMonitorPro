import { useState, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import '../assets/styles/Profile.css';
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_PET } from '../utils/mutation';
import { useParams } from 'react-router-dom';
import { QUERY_PET } from '../utils/queries';

function EditPetProfile(props) {
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
                                   placeholder="Pet's Notes" onChange={handleInputChange} defaultValue={props.pet_notes}>
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

export default function Profile() {
     const { id } = useParams();
     const { loading, data } = useQuery(QUERY_PET, {
          variables: {_id: id},
     });

     const petData = data?.pet || [];
     console.log(96, data);
     console.log(99, petData._id);

     if(loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }
    return (
        <>
              <div>
                    <EditPetProfile key={petData._id} pet_name={petData.pet_name} pet_sex={petData.pet_sex} pet_type={petData.pet_type} pet_id={petData._id} pet_notes={petData.pet_notes} />
              </div>
        </>
    );
}