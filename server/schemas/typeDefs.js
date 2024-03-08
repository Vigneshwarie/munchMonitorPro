// Updated the Date to String for Feed date data and modified the Pet to the ID.
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
          pet(_id: ID!): Pet
     }

     type Mutation {
          login(email: String!, password: String!): Auth
          addUser(first_name: String!, last_name: String!, email: String!, password: String!): Auth
          addPet(pet_name: String!, pet_type: String, pet_sex: String, pet_notes: String): Pet
          editPet(id: ID!, pet_notes: String): Pet
          deletePet(id: ID!): Pet
          createFeeder(feed_date: String!, pet_id: ID, breakfast_food_type: String, medicine_morning: String, lunch_food_type: String, medicine_afternoon: String, dinner_food_type: String, medicine_evening: String): Feeder
          editFeeder(id: ID!, breakfast_food_type: String, medicine_morning: String, lunch_food_type: String, medicine_afternoon: String, dinner_food_type: String, medicine_evening: String): Feeder
     }
`;

module.exports = typeDefs;