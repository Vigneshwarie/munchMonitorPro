
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


        </>
    )
}