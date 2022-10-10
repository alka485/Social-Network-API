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
 console.log(email);


  await User.collection.insertOne({username: users,email: email});

   console.info('Seeding complete! 🌱');
  process.exit(0);
});
