const models = require('../models');
const faker = require('faker');
const Commentary = models.Commentary;

for (let i = 0; i < 200; i++) {
  Commentary.create({
    content: faker.hacker.phrase(),
    userId: Math.floor((Math.random() * 49) + 1),
    showId: Math.floor((Math.random() * 49) + 1)
  })
    .then(() => console.log('"You\'re a dragon. Be a dragon." - Lady Olenna of Highgarden'))
    .catch((error) => console.log(error));
}