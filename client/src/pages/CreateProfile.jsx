import React from 'react';
import { Form } from 'react-bulma-components';
import Dropdown2 from '../components/dropdown2';
import Dropdowngender from '../components/dropdowngender';
import TextareaPage from '../components/Textarea';
import { Button } from 'react-bootstrap';

const styles = {
    petformbutton: {
    //   background: "#E7D045",
      color: "black",
      border: "#E7D045",
      margin: "20px"
    }
  };

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
            <br />
            <Button
                // disabled={!(userFormData.petname && userFormData.petsex && userFormData.pettype && userFormData.petnotes)}
                type='submit'
                style={ styles.petformbutton} className="petformbutton"
                variant='light'>
                Cancel
            </Button>
            <Button
                // disabled={!(userFormData.petname && userFormData.petsex && userFormData.pettype && userFormData.petnotes)}
                type='submit'
                 style={ styles.petformbutton} className="petformbutton"
                variant='info'>
                Submit
            </Button>
            <br />



        </>


    );
}