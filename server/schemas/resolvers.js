const { User, Pet, Feeder } = require('../models');

const resolvers = {
     Query: {
          user: async(parent, args, context) => {
               if (context.user) {
                    return User.findById(context.user._id);
               }
          },
          pet: async (parent, args, context) => {
               if (context.pet) {
                    return Pet.findOne(context.pet._id);
               }
          },
     },
     Mutation: {
          login: async (parent, { email, password }) => {
               const user = await User.findOne({ email });

               const correctPw = await user.isCorrectPassword(password);
          },
          addUser: async (parent, args) => {
               const user = await User.create(args);
               return user;
          },
          addPet: async (parent, args, context) => {
               if (context.user) {
                    const updatedUser = await User.findOneAndUpdate(
                         { _id: context.user._id },
                         { $push: { my_pets: args } },
                         { new: true }
                    );
                    return updatedUser;
               }
          },
          editPet: async (parent, args) => {
               const updatedPet = await Pet.findOneAndUpdate(
                    { _id: args._id },
                    { $set: { pet_notes: args } },
                    { new: true }
               );
               return updatedPet;
          },
          deletePet: async (parent, { _id }, context) => {
               if (context.user) {
                    const updatedUser = await User.findOneAndUpdate(
                         { _id: context.user._id },
                         { $pull: { my_pets: { _id  } } },
                         { new: true }
                    );
                    return updatedUser;
               }
          },
          createFeeder: async (parent, args) => {
               const updatedFeeder = await Feeder.create(args);
               return updatedFeeder;
          }


     }

};

module.exports = resolvers;