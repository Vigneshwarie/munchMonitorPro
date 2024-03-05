
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
                    Username
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
            <Form.Field>
                <Form.Label>
                    First Name
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder="e.g. John"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                    Last Name
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder=" Smith"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder="e.g. test@test.com"
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
            <Form.Field>
                <Form.Label>
                    Confirm Password
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder="confirm password"
                        type="password"
                    />
                </Form.Control>
            </Form.Field>
        </>
    )
}