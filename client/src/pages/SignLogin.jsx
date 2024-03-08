import React from 'react';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, } from 'react-bulma-components';
import { Button } from 'react-bootstrap'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Signinpic from '../assets/mmprosignin.png';
import Signuppic from '../assets/mmprosignup.png';

//  Field, Label, Control, Input

export default function SignLogin() {
    const [userFormData, setUserFormData] = useState({
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
            console.error(err);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };


    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

                <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your signup!
                </Alert>

                <  img src={Signinpic} className="signinpic" />

                <Form.Field>
                    <Form.Label>
                        email
                    </Form.Label>
                    <Form.Control>
                        <Form.Input
                            placeholder="e.g. John Doe"
                            type="text"
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control>
                        <Form.Input
                            placeholder="password"
                            type="password"
                        />
                    </Form.Control>
                </Form.Field>

                <Button variant="info">Login</Button>{' '}
                <br />

                <  img src={Signuppic} className="signinpic" />

                <Form.Field>
                    <Form.Label htmlFor='firstname'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='First Name'
                        name='firstname'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter your First name!</Form.Control.Feedback>
                </Form.Field>

                <Form.Field>
                    <Form.Label htmlFor='lastname'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Last Name'
                        name='lastname'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter your Last name!</Form.Control.Feedback>
                </Form.Field>
//------------------------------------------------------------------------------------------------------
                <Form.Field>
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

                </Form.Field>
//-------------------------------------------------------------------------------------------------
                <Form.Field>
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

                </Form.Field>
//-----------------------------------------------------------------------------------------------
                <Form.Field>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Field>
//-----------------------------------------------------------------------------------------------------------------
                <Button
                    // variant="info" 
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>Sign Up!</Button>
            </Form>
        </>
    )
}