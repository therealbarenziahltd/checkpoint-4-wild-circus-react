const models = require('../models');
const faker = require('faker');
const Commentary = models.Commentary;

for (let i = 0; i < 30; i++) {
  Commentary.create({
    content: faker.hacker.phrase(),
    userId: Math.floor(Math.random()*10),
    showId: Math.floor(Math.random()*10)
  })
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}