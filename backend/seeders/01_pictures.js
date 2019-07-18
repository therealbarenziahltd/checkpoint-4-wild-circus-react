const models = require('../models');
const faker = require('faker');
const Picture = models.Picture;

for (let i = 0; i < 20; i++) {
  Picture.create({
    url: faker.image.imageUrl(),
    showId: Math.floor(Math.random()*10)
  })
    .then((user) => console.log(user))
    .catch((error) => console.log(error));
}