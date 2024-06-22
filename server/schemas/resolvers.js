const { User, Pet, Feeder } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');
var { ObjectId } = require('mongodb'); 
const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

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
                    if (context.user) {
                         return Pet.findById(pet._id);
                    }
               } catch (err) {
                    console.log('Error in query while retrieving pet details: ', err);
               }
          },
          feeder: async (parent, args, context) => {
               try {
                    const feed = { ...args };
                    const pet_id = new ObjectId(feed.pet_id);
                    const my_date = feed.feed_date;
                    if (context.user) {
                         const feeder_data = await Feeder.findOne({ pet_id: pet_id , feed_date:  my_date }, {});
                         console.log(9999, feeder_data);
                         return feeder_data;
                    }
               } catch (err) {
                    console.log('Error in query while retrieving feeder details: ', err);
               }
          }
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
                         const feederData = await Feeder.deleteMany({ pet_id: _id });
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
               console.log(898989);
               console.log(args);
               try {
                    const updatedFeeder = await Feeder.create(args);
                    return updatedFeeder;
               } catch (err) {
                    console.log('Error in mutation while creating feeder: ', err);
               } 
          },
          editFeeder: async (parent, args) => {
               try {
                    const feeder = { ...args };
                    console.log(7777, feeder);
                    const updatedFeeder = await Feeder.findOneAndUpdate(
                         { _id: args._id },
                         { $set: args },
                         { new: true }
                    );
                    return updatedFeeder;
               } catch (err) {
                    console.log('Error in mutation while editing feeder: ', err);
               }
          },
          chatWithGPT: async (parent, { prompt }) => { 
               try {
                    console.log(99999101010101);
                    const contentChunks = [];
                    const response = await openai.chat. completions.create({
                         model: "gpt-3.5-turbo",
                         messages: [{ role: "user", content: prompt }],
                         temperature: 1,
                         max_tokens: 500,
                         top_p: 1,
                         frequency_penalty: 0,
                         presence_penalty: 0,
                         stream: true,
                    }, {
                         headers: {
                              'Content-Type': 'text/plain',
                         },
                    });
                    console.log("response in resolvers:===", response);

                    if (typeof response[Symbol.asyncIterator] !== 'function') {
                         throw new Error('Response is not iterable');
                    }

                    for await (const chunk of response) {
                         const content = chunk.choices[0]?.delta?.content || "";
                         if (content) {
                              contentChunks.push(content);
                         }
                    }

                    const finalContent = contentChunks.join('').replace(/\s+([,.?!;:])/g, '$1');
                    return finalContent;
         
               } catch (error) {
                    console.error(error);
                    return error;
               }
          }
     }
};

module.exports = resolvers;