const connection = require('../config/connection');
const { User } = require('../models');
const {getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});

  const users = getRandomName(5);
  const email = getRandomEmail(5)
  console.log(users);



  await User.collection.insertOne(users,email);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  //console.table(videos);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
