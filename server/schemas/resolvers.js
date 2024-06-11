const { User, Pet, Feeder } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
     Query: {
          user: async (parent, args, context) => {
               try {
                    console.log(8, context.user);
                    if (context.user) {
                         return await User.findById(context.user._id).populate('my_pets');
                    }
               } catch (err) {
                    console.log('Error in query while retrieving user details: ', err);
               } 
          },
          pet: async (parent, args, context) => {
               try {
                    const pet = { ...args };
                    console.log(888, pet);
                    if (context.user) {
                         console.log(999);
                         return Pet.findById(pet._id);
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
                    if (!user) {
                         throw AuthenticationError;
                    }

                    const correctPw = await user.isCorrectPassword(password);
                    if (!correctPw) {
                         throw AuthenticationError;
                    }
                    const token = signToken(user);
                    //    console.log(token);
                    // While testing Loginform this returns the user details and token.
                    return { token, user };
                    

               } catch (err) {
                    console.log('Error in mutation while logging in: ', err);
               }
          },
          addUser: async (parent, args) => {
               try {
                    const user = await User.create(args);
                    const token = signToken(user);
                    return { token, user };
               } catch (err) {
                    console.log('Error in mutation while adding user: ', err);
               }
          },
          addPet: async (parent, args, context) => {
               try {
                    console.log(58, { ...args });
                    if (context.user) {
                         const pet = { ...args };
                         const petData = await Pet.create(pet);
                         console.log(66666);
                         console.log(petData);
                         const updatedUser = await User.findOneAndUpdate(
                              { _id: context.user._id },
                              { $addToSet: { my_pets: petData._id } },
                              { new: true }
                         );
                         return petData;
                    }
               } catch (err) {
                    console.log('Error in mutation while adding pet for a user: ', err);
               }        
          },
          editPet: async (parent, {pet_notes, _id}) => {
               try {
                    console.log(555);
                    console.log(pet_notes, _id);

                    const updatedPet = await Pet.findOneAndUpdate(
                         { _id: _id },
                         { $set: { pet_notes: pet_notes } },
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
                         const petData = await Pet.findByIdAndDelete({_id});
                         const updatedUser = await User.findOneAndUpdate(
                              { _id: context.user._id },
                              { $pull: { my_pets: _id  } },
                              { new: true }
                         );
                         return petData;
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