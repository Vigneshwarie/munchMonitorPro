const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Pet = require('./Pet');

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
          my_pets: [{
               type: Schema.Types.ObjectId,
               ref: 'Pet'
          }],
     },
     {
          toJSON: {
               virtuals: true,
          },
     }
);

// hash user password
userSchema.pre('save', async function (next) {
     if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
     }
     next();
});

// This block will compare and validate the user entered password during login process
userSchema.methods.isCorrectPassword = async function (password) {
     return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;