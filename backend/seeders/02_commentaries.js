const models = require('../models');
const faker = require('faker');
const Commentary = models.Commentary;

for (let i = 0; i < 1001; i++) {
  Commentary.create({
    content: faker.hacker.phrase(),
    userId: Math.floor((Math.random() * 49) + 1),
    showId: Math.floor((Math.random() * 49) + 1)
  })
    .then(() => console.log('"The seed is strong." -Ned Stark'))
    .catch((error) => console.log(error));
}