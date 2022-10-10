  const names =[
    'sal',
    'Lernantino',
    'Amiko',
    'Jordan',
    'Blake',
 ];

 const email = [
  'sal@hotmail.com',
  'lernantino@gmail.com',
  'amiko2k20@aol.com',
  'jordan99@msn.com',
  'the_blake@yahoo.com',
 ]
  //const users = [];

  // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

  console.log(getRandomName);

  // const getRandomEmail= (int) => {
  //   if (int === 1) {
  //     return getRandomArrItem(email);
  //   }
  //   let results = [];
  //   for (let i = 0; i < int; i++) {
  //     results.push({
  //       responseBody: getRandomArrItem(email),
  //       username: getRandomName(),
  //     });
  //   }
  //   return results;
  // };

  const getRandomEmail = () =>
  `${getRandomArrItem(email)}`;

  
  module.exports = { getRandomName ,getRandomEmail};

