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