const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {getRandomName, email, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await User.deleteMany({});
  await Thought.deleteMany({});

  const thought = getRandomThought(5);
  const usernames = getRandomName(5);
  const emails = email;
  console.log(emails);



  await Thought.collection.insertMany(thought);
  var thoughts = await Thought.find();
  
  var users = [];

  for( let i =0 ; i < 5 ; i++){
    users.push({
              username:usernames[i],
              email : emails[i],
              // email : emails,
              //emails,
              thoughts:[thoughts[i]._id]
            })

  }
  await User.collection.insertMany(users);
  
  //await User.collection.insertMany(usernames); this does not work
 

console.table(users);
console.table(thought);

   console.info('Seeding complete! 🌱');
  process.exit(0);
});
