const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {getRandomName, getRandomEmail , getRandomThought} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = getRandomName(5);
  const email = getRandomEmail(5)
  const thought = getRandomThought(5);

  console.log(users);
  console.log(email);
  console.log(thought);


  await User.collection.insertOne({username: users,email: email});
  await Thought.collection.insertMany(thought);
  //await Thought.collection.insertOne(thought);

   console.info('Seeding complete! 🌱');
  process.exit(0);
});
