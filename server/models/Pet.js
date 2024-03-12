const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// This should be a schema as we use this in the User model.


const petSchema = new Schema(
     {
          pet_name: {
               type: String,
               required: true,
          },
          pet_type: { 
               type: String,
          },
          pet_sex: {
               type: String,
          },
          pet_notes: { 
               type: String,
          },
     }
);

const Pet = model('Pet', petSchema);

module.exports = Pet;