import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutation';
import Auth from '../utils/auth';
import Signinpic from '../assets/mmprosignin.png';
import '../assets/styles/LoginSignUp.css';

//  Field, Label, Control, Input

export default function LoginPage() {
     const [userFormData, setUserFormData] = useState({
          email: '',
          password: '',
     });
     const [validated] = useState(false);
     const [showAlert, setShowAlert] = useState(false);
     const [login, { error }] = useMutation(LOGIN_USER);

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

          // check if form has everything (as per react-bootstrap docs)
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
               event.preventDefault();
               event.stopPropagation();
          }

          try {
               const { data } = await login({
                    variables: { ...userFormData },
               });

               console.log(data);
               Auth.login(data.login.token);
          } catch (err) {
               console.log(err);
          }

          setUserFormData({
               email: '',
               password: '',
          });
     };

     function signupbutton() {
          window.location.assign('/signup');
     }



     return (
          <>
               <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                    {/* show alert if server response is bad */}
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                         Something went wrong with your signup!
                    </Alert>

                    <img src={Signinpic} />

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='email'>Email</Form.Label>
                         <Form.Control
                              type='email'
                              placeholder='Your email address'
                              name='email'
                              onChange={handleInputChange}
                              value={userFormData.email}
                              required
                         />
                         <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                         <Form.Label htmlFor='password'>Password</Form.Label>
                         <Form.Control
                              type='password'
                              placeholder='Your password'
                              name='password'
                              onChange={handleInputChange}
                              value={userFormData.password}
                              required
                         />
                         <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                         disabled={!(userFormData.email && userFormData.password)}
                         type='submit'
                         className="signinbutton"
                    >
                         Sign In
                    </Button>

                    <Button
                         type='submit'
                         className="signupbutton"
                         onClick={signupbutton}
                    >
                         Sign Up
                    </Button>

                    <br />
               </Form>
          </>
     );
}