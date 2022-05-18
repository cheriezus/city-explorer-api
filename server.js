'use strict';

console.log('our furst server');

//v REQUIRE
//in order to use soething servers need ot be told to require it and then use it. React does this in one step (import), Express needs two

// to create a server we are bringing in Express
const express = require('express');

let data = require('./data/data.json');

// we need to bring in our .env file, so we'll use this after we have npm i dotenv
require('dotenv').config();

// USE
//once we require something we need to use it
// this is where assign the required file a name (variable)

//once we have express we must USE express
const app = express();

//define pORT and validate that my .env file is working
const PORT = process.env.PORT || 3001;
//if my server is runnong on port 3002, I know there's a problem ////with my .env file or how i'm importing it or values in it

// ROUTES
// we need to declare our endpoints

// our basic default route:
//app.get corrolates axios.get
//two arguments: the URL in quotes,
//and a callback f/unction
// this gets called our "Slash route"
app.get('/', (request, response) => {
  response.send('hello form our server');
});

app.get('/hello', (request, response) => {
  console.log(request.query.name);
  let name = request.query.name;
  let lastName = request.query.lastName
  response.send(`Hello ${name} ${lastName}!`);
});

app.get('/pets', (request, response) => {
  let speciesFromRequest = request.query.species;
  let selectedPet = data.find(pet => pet.species === speciesFromRequest);
  let dataTosend = new Pet(selectedPet); 
  response.send(dataToSend);
});

// catch all "star route"
app.get('*', (request, response) => {
  response.send('The thing you are looking for doesn\'t exist');
})

//ERRORS
//handle errors


//CLASSES
class Pet {
  constructor(petObject) {
    this.name = petObject.name;
    this.breed = petObject.breed;
  }
}

//LISTEN
// start the server
// listen is an Express method that takes in 2 arguments: a port value and a callback function
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// npm kill-port 3001
