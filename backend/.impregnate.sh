#!/bin/zsh
sequelize db:drop
sequelize db:create
sequelize db:migrate
node ./seeders/01_pictures.js
node ./seeders/02_commentaries.js
node ./seeders/03_users.js
node ./seeders/04_shows.js
node ./seeders/05_prices.js
echo 'Database is now ready to use, everything went fine !'
echo '-----------------------------------------'
echo 'To log as admin: '
echo 'Email : dstormborn@dragonstone.ovl'
echo 'Password : dracarys'
echo '-----------------------------------------'