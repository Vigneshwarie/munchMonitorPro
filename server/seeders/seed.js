const db = require('../config/connection');
const { User, Pet } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./petSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Pet', 'pets');

    await cleanDB('User', 'users');
    /**
     * TODO PET AND USER SEEDS (OPTIONAL)
     */
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
