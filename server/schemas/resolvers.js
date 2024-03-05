const { User, Pet, Feeder } = require('../models');

const resolvers = {
     Query: {
          user: async (parent, args, context) => {
               try {
                    if (context.user) {
                         return User.findById(context.user._id);
                    }
               } catch (err) {
                    console.log('Error in query while retrieving user details: ', err);
               } 
          },
          pet: async (parent, args, context) => {
               try {
                    if (context.pet) {
                         return Pet.findOne(context.pet._id);
                    }
               } catch (err) {
                    console.log('Error in query while retrieving pet details: ', err);
               }
          },
     },
     Mutation: {
          login: async (parent, { email, password }) => {
               try {
                    const user = await User.findOne({ email });
                    const correctPw = await user.isCorrectPassword(password);
               } catch (err) {
                    console.log('Error in mutation while logging in: ', err);
               }
          },
          addUser: async (parent, args) => {
               try {
                    const user = await User.create(args);
                    return user;
               } catch (err) {
                    console.log('Error in mutation while adding user: ', err);
               }
          },
          addPet: async (parent, args, context) => {
               try {
                    if (context.user) {
                         const updatedUser = await User.findOneAndUpdate(
                              { _id: context.user._id },
                              { $push: { my_pets: args } },
                              { new: true }
                         );
                         return updatedUser;
                    }
               } catch (err) {
                    console.log('Error in mutation while adding pet for a user: ', err);
               }        
          },
          editPet: async (parent, args) => {
               try {
                    const updatedPet = await Pet.findOneAndUpdate(
                         { _id: args._id },
                         { $set: { pet_notes: args } },
                         { new: true }
                    );
                    return updatedPet;
               } catch (err) {
                    console.log('Error in mutation while editing pet details: ', err);
               }
          },
          deletePet: async (parent, { _id }, context) => {
               try {
                    if (context.user) {
                         const updatedUser = await User.findOneAndUpdate(
                              { _id: context.user._id },
                              { $pull: { my_pets: { _id  } } },
                              { new: true }
                         );
                         return updatedUser;
                    }
               } catch (err) {
                    console.log('Error in mutation while deleting pet: ', err);
               }
          },
          createFeeder: async (parent, args) => {
               try {
                    const updatedFeeder = await Feeder.create(args);
                    return updatedFeeder;
               } catch (err) {
                    console.log('Error in mutation while creating feeder: ', err);
               }
          },
          editFeeder: async (parent, args) => {
               try {
                    const updatedFeeder = await Feeder.findOneAndUpdate(
                         { _id: args._id },
                         { $set: args },
                         { new: true }
                    );
                    return updatedFeeder;
               } catch (err) {
                    console.log('Error in mutation while editing feeder: ', err);
               }
          }
     }
};

module.exports = resolvers;