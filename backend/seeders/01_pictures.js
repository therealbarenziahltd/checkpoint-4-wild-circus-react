const models = require('../models');
const axios = require('axios');
const Picture = models.Picture;
const apiKey = '80a74941-dcba-4cfd-91e9-a1923ebc7fe1';

let x;

const getCat = async () => {
  await axios.get(`https://api.thecatapi.com/v1/images/search?limit=100&page=100&order=DESC&x-api-key=${apiKey}`)
    .then(res => {
      console.log('getCats ran');
      x = res.data;
      return res.data;
    })
    .catch((err) => console.log(err));

};

const makePictures = (catArray) => {
  console.log('catarray = ', catArray);
  for (let i = 0; i < catArray.length * 3; i++) {
    Picture.create({
      url: catArray[Math.floor(Math.random() * catArray.length)].url || 'http://placekitten.com/200/200',
      showId: Math.floor((Math.random() * 49) + 1)
    })
      .then(() => console.log('Go for #EmmyliaClarke 2019 <3'))
      .catch((error) => console.log(error));
  }
};

const main = async () => {
  await getCat();
  await makePictures(x);
};

main();