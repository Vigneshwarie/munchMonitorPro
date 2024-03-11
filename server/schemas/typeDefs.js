// Updated the Date to String for Feed date data and modified the Pet to the ID.
// Add Pet, edit pet and delete pet should return a user as it is a schema to the user.
// Pet is not a model it returns User
// Added pet_id as _id is mentioned for both user and pet, application could not identify the correct id. As of now correcting only pet; Feeder is still pending
const typeDefs = `
     type User {
          _id: ID!
          first_name: String!
          last_name: String!
          email: String!
          my_pets: [Pet]
     }

     type Pet {
          _id: ID!
          pet_id: String!
          pet_name: String!
          pet_type: String
          pet_sex: String
          pet_notes: String
     }

     type Feeder {
          _id: ID!
          feed_date: String!
          pet_id: ID
          breakfast_food_type: String
          medicine_morning: String
          lunch_food_type: String
          medicine_afternoon: String
          dinner_food_type: String
          medicine_evening: String
     }

     type Auth {
          token: ID!
          user: User
     }
  
     type Query {
          user: User
          pet(_id: ID!): User
     }

     type Mutation {
          login(email: String!, password: String!): Auth
          addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth
          addPet(pet_name: String!, pet_type: String, pet_sex: String, pet_notes: String): User
          editPet(id: ID!, pet_notes: String): User
          deletePet(id: ID!): User
          createFeeder(feed_date: String!, pet_id: ID, breakfast_food_type: String, medicine_morning: String, lunch_food_type: String, medicine_afternoon: String, dinner_food_type: String, medicine_evening: String): Feeder
          editFeeder(id: ID!, breakfast_food_type: String, medicine_morning: String, lunch_food_type: String, medicine_afternoon: String, dinner_food_type: String, medicine_evening: String): Feeder
     }
`;

module.exports = typeDefs;