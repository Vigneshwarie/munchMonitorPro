
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Form, } from 'react-bulma-components';
//  Field, Label, Control, Input

export default function SignLogin() {
    return (
        <>
            <h2>THIS IS THE Sign Up/Login PAGE</h2>


            <Form.Field>
                <Form.Label>
                    E-mail
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder="e.g. John Doe"
                        type="email"
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


        </>
    );
}