import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
     mutation login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
               token
               user {
                    _id
                    email
               }
          }
     }
`;

export const ADD_USER = gql`
     mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
          addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
               token
               user {
                    _id
                    email
               }
          }
     }
`;

// Updated mutation as addPet should return the user details and their pet details
export const ADD_PET = gql`
     mutation addPet($pet_name: String!, $pet_type: String, $pet_sex: String, $pet_notes: String) {
          addPet(pet_name: $pet_name, pet_type: $pet_type, pet_sex: $pet_sex, pet_notes: $pet_notes) {
               _id
               pet_name
               pet_type
               pet_sex
               pet_notes
          }
     }
`;
// Updated mutation as editPet should return the user details and their pet details
export const EDIT_PET = gql`
     mutation editPet($_id:ID!, $pet_notes: String) {
          editPet(_id:$_id, pet_notes: $pet_notes) {
               _id
               pet_name
               pet_type
               pet_sex
               pet_notes
          }
     }
`;

// Updated mutation as deletePet should return the user details and their pet details
export const DELETE_PET = gql`
     mutation deletePet($_id:ID!) {
          deletePet(_id:$_id) {
               _id
               pet_name
               pet_type
               pet_sex
               pet_notes
          }
     }
     
`;

export const CREATE_FEEDER = gql`
     mutation createFeeder($feed_date: String!, $pet_id: ID, $breakfast_food_type: String, $medicine_morning: String, $lunch_food_type: String, $medicine_afternoon: String, $dinner_food_type: String, $medicine_evening: String ) {
          createFeeder(feed_date: $feed_date, pet_id: $pet_id, breakfast_food_type: $breakfast_food_type, medicine_morning: $medicine_morning, lunch_food_type: $lunch_food_type, medicine_afternoon: $medicine_afternoon, dinner_food_type: $dinner_food_type, medicine_evening: $medicine_evening) {
               _id
               feed_date
               pet_id
               breakfast_food_type
               medicine_morning
               lunch_food_type
               medicine_afternoon
               dinner_food_type
               medicine_evening
          }
     }
`;

export const EDIT_FEEDER = gql`
     mutation editFeeder($_id:ID!, $breakfast_food_type: String, $medicine_morning: String, $lunch_food_type: String, $medicine_afternoon: String, $dinner_food_type: String, $medicine_evening: String ) {
          editFeeder(_id:$_id, breakfast_food_type: $breakfast_food_type, medicine_morning: $medicine_morning, lunch_food_type: $lunch_food_type, medicine_afternoon: $medicine_afternoon, dinner_food_type: $dinner_food_type, medicine_evening: $medicine_evening) {
               _id
               feed_date
               pet_id
               breakfast_food_type
               medicine_morning
               lunch_food_type
               medicine_afternoon
               dinner_food_type
               medicine_evening
          }
     }
`;

export const CHATWITHGPT = gql`
     mutation chatWithGPT($prompt: String!) {
          chatWithGPT(prompt: $prompt) 
     }
`;