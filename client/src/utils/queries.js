import { gql } from '@apollo/client';

export const QUERY_USER = gql`
     query user {
          user {
               _id
               first_name
               last_name
               email
               my_pets {
                    _id
                    pet_name
                    pet_type
                    pet_sex
                    pet_notes
               }
          }
     }
`;

export const QUERY_PET = gql`
     query pet($_id: ID!) {
          pet(_id: $_id) {
               _id
               pet_name
               pet_type
               pet_sex
               pet_notes
          }
     }
`;

export const QUERY_FEEDER = gql`
     query feeder($pet_id: ID!, $feed_date: String!) {
          feeder(pet_id: $pet_id, feed_date: $feed_date) {
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