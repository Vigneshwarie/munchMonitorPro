import React from 'react';
import { Form, Field, Control, Textarea, Message } from 'react-bulma-components';
import Dropdown2 from '../components/dropdown2';
import Dropdowngender from '../components/dropdowngender';
import TextareaPage from '../components/Textarea';

export default function CreateProfile() {
    return (
        <>
            <h2>THIS IS THE CREATE PRFILE</h2>

            <Form.Field>
                <Form.Label>
                    Pet Name
                </Form.Label>
                <Form.Control>
                    <Form.Input
                        placeholder="Pet's Name"
                        type="text"
                    />
                </Form.Control>
            </Form.Field>

            <Dropdown2 />
            <br />
            <Dropdowngender />
            <br />
            <TextareaPage />

      

        </>


    );
}