const models = require('../models');
const faker = require('faker');
const Picture = models.Picture;

for (let i = 0; i < 150; i++) {
  Picture.create({
    url: faker.image.imageUrl(),
    showId: Math.floor((Math.random() * 49) + 1)
  })
    .then(() => console.log('Go for #EmmyliaClarke 2019 <3'))
    .catch((error) => console.log(error));
}