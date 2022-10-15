const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {getRandomName, getRandomEmail , getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});
  

  const users = getRandomName(5);
  // const users =[];
  const email = getRandomEmail(5)
  const thought = getRandomThought(5);

  for(let i =0; i < 20; i++){
    users.push({
      username,
      email,
      thought
    });
  }

  console.log(users);
  console.log(email);
  console.log(thought);


  //await User.collection.insertOne({username: users,email: email});
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thought);
  //await Thought.collection.insertOne(thought);

   console.info('Seeding complete! 🌱');
  process.exit(0);
});
