import React from 'react';
import { Form, Field, Control, Textarea, Message } from 'react-bulma-components';
// import { DropdownMenu } from 'react-bootstrap';
import AnimalDropdown from '../components/AnimalDropdown';
import Dropdown2 from '../components/dropdown2';
import Dropdowngender from '../components/dropdowngender';

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

            <Message.Field>
                <Message.Control>
                    <Message.Textarea
                        placeholder="I am a textarea"
                    />
                </Message.Control>
            </Message.Field>


        </>


    );
}