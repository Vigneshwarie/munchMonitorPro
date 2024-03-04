const { Schema, model } = require('mongoose');

const petSchema = require('./Pet');

const userSchema = new Schema(
     {
          first_name: {
               type: String,
               required: true,
          },
          last_name: {
               type: String,
               required: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
               match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
          password: {
               type: String,
               required: true,
          },
          myPets: [petSchema],
     },
     {
          toJSON: {
               virtuals: true,
          },
     }
);

const User = model('User', userSchema);

module.exports = User;