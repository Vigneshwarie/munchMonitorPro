import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';

import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';
import Auth from '../utils/auth';
import Signinpic from '../assets/mmprosignin.png';
import Signuppic from '../assets/mmprosignup.png';

//  Field, Label, Control, Input
const styles = {
    signinbutton: {
      background: "#E7D045",
      color: "black",
      border: "#E7D045"
    }
  };

  
export default function SignLogin() {
    const [userFormData, setUserFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });
    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error }] = useMutation(ADD_USER);

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
        console.log(1234);
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err);
        }

        setUserFormData({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        });
    };


    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>
                <br />
                <img src={Signuppic} />

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='first_name'>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your first name'
                        name='first_name'
                        onChange={handleInputChange}
                        value={userFormData.first_name}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>First Name is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='last_name'>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your last name'
                        name='last_name'
                        onChange={handleInputChange}
                        value={userFormData.last_name}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Last Name is required!</Form.Control.Feedback>
                </Form.Group>

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
                    disabled={!(userFormData.first_name && userFormData.last_name && userFormData.email && userFormData.password)}
                    type='submit'
                    variant='danger'>
                    Sign Up!
                </Button>
            </Form>
        </>
    );
}