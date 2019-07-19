const models = require('../models');
const faker = require('faker');
const Show = models.Show;

for (let i = 0; i < 50; i++) {
  Show.create({
    city: faker.address.city(),
    date: faker.date.past(),
    priceId: Math.floor((Math.random() * 4) + 1)
  })
    .then(() => console.log('(!SPOILERS!) Drogon brought Dany to Volantis to be resurrected by the Red Priestress of R`hllor. The daughter of Fire then came back to take what is hers: Westeros. Seeing this, Aegon "Snow" Targaryen has no choice but to join and council her closely. GoT S9e01'))
    .catch((error) => { console.log(error); });
}