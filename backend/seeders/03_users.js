const models = require('../models');
const faker = require('faker');
const User = models.User;

for (let i = 0; i < 10; i++) {
  User.create({
    firstName: faker.name.firstName(),
    lastName: faker.hacker.ingverb(),
    email: faker.internet.email(),
    password: 'test1234',
    isAdmin: false,
    birthdate: faker.date.past(),
  }, { include: 'commentaries' })
    .then((user) => user)
    .catch((error) => console.log(error));
}