#!/bin/bash
if [ -e ./.env ]; then
  echo ".env file detected, proceeding with the script..."
else
  echo "You seem to not have any .env file, should we create it ? (y/n)"
  read -p "y/n : " answer
  if [ $answer = "y" ]; then
    read -p "What is your DB (sql) username ?" username
    read -p "What is your DB (sql) password ?" password
    read -p "What is your DB (sql) name ?" dbname
    touch .env
    echo "
      DB_USERNAME='$username'
      DB_PASSWORD='$password'
      DB_NAME='$dbname'
      DB_HOSTNAME='localhost'
      JWT_SECRET='DanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWon'
      " >> .env
    echo "./backend/.env created. You may want to custom the JWT_SECRET & DB_HOSTNAME values. 
    Proceeding with the script..."
  else echo 'Proceeding with the script...'
  fi
fi