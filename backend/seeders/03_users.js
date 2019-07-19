const models = require('../models');
const faker = require('faker');
const User = models.User;

User.create({
  firstName: 'Daenerys',
  lastName: 'Targaryen',
  email: 'dstormborn@dragonstone.ovl',
  password: 'dracarys',
  isAdmin: true,
  birthdate: faker.date.past(),
}, { include: 'commentaries' })
  .then(() => console.log('Dany lives <3.'))
  .catch((error) => console.log(error));

for (let i = 0; i < 100; i++) {
  User.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'test1234',
    isAdmin: false,
    birthdate: faker.date.past(),
  }, { include: 'commentaries' })
    .then(() => console.log('"You\'re a dragon. Be a dragon." - Lady Olenna of Highgarden'))
    .catch((error) => console.log(error));
}

