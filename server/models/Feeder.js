const { Schema, model } = require('mongoose');

const feederSchema = new Schema(
     {
          feed_date: {
               type: Date,
               required: true,
               default: Date.now
          },
          pet_id: {
               type: Schema.Types.ObjectId,
               ref:'Pet'
          },
          breakfast_food_type: {
               type: String,
          },
          medicine_morning: {
               type: String,
          },
          lunch_food_type: {
               type: String,
          },
          medicine_afternoon: {
               type: String,
          },
          dinner_food_type: {
               type: String,
          },
          medicine_evening: {
               type: String,
          },
     },
     {
          toJSON: {
               virtuals: true,
          },
     }
);

const Feeder = model('Feeder', feederSchema);

module.exports = Feeder;