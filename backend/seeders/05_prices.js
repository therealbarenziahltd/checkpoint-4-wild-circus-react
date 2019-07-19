const models = require('../models');
const Price = models.Price;

for (let i = 0; i < 5; i++) {
  Price.create({
    adult: Math.floor((Math.random() * 15) + 10),
    child: Math.floor((Math.random() * 5) + 10),
    group: Math.floor((Math.random() * 3) + 10),
    school: 10,
  })
    .then(() => console.log('"...Dracarys." -Daenerys Stormborn of the house Targaryen'))
    .catch((error) => console.log(error));
}