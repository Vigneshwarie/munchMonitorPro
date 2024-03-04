const { Schema } = require('mongoose');

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

module.exports = petSchema;