
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Field, Label, Control, Input } from 'react-bulma-components';

export default function SignLogin() {
    return (
        <>
            <h2>THIS IS THE Sign Up/Login PAGE</h2>

            <Field>
                <Label>
                    Username
                </Label>
                <Control>
                    <Input
                        placeholder="e.g. John Doe"
                        type="text"
                    />
                </Control>
            </Field>
            <Field>
                <Label>
                    Password
                </Label>
                <Control>
                    <Input
                        placeholder="password"
                        type="password"
                    />
                </Control>
            </Field>


            <Field>
                <Label>
                    First Name
                </Label>
                <Control>
                    <Input
                        placeholder="e.g. John"
                        type="text"
                    />
                </Control>
            </Field>
            <Field>
                <Label>
                    Last Name
                </Label>
                <Control>
                    <Input
                        placeholder=" Smith"
                        type="text"
                    />
                </Control>
            </Field>


            <Field>
                <Label>
                    Email
                </Label>
                <Control>
                    <Input
                        placeholder="e.g. test@test.com"
                        type="email"
                    />
                </Control>
            </Field>
            <Field>
                <Label>
                    Password
                </Label>
                <Control>
                    <Input
                        placeholder="password"
                        type="password"
                    />
                </Control>
            </Field>
            <Field>
                <Label>
                    Confirm Password
                </Label>
                <Control>
                    <Input
                        placeholder="confirm password"
                        type="password"
                    />
                </Control>
            </Field>
            
        </>
    )
}