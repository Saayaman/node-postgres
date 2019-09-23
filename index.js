const express = require('express');
const ps = require('./postgres-config');
const cors = require('cors');
require('dotenv').config();

// In this file we...

// Initilized express
const app = express();

// initilized postgres
ps.connect();

// if (process.env.NODE_ENV === 'staging') {
//   app.use(cors)
// }

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // using querystring instead of qs

// API 1 
app.get('/api', (request, response) => {
  //setting the reponse when people access localhost:5001/api
  response.send('Hi there! you did an api call');
})

// API 2
app.get('/api/books', (request, response) => {
  ps.client.query("SELECT * FROM books").then((result) => {
    response.send(result.rows);
  }).catch(err => {
    console.log('error:', err);
    response.send(err);
  })
})

// API 3
app.post('/api/books', (request, response) => {
  // request is data that user sends
  const author = request.body.author;
  const title = request.body.title;

  // const query = 'INSERT INTO books (author, title) VALUES (\'' + author + '\',\'' + title + '\')'
  const query = 'INSERT INTO books (author, title) VALUES ($1, $2)';
  const params = [author, title];


  console.log(query);

  // response is what you return as a result
  ps.client.query(query, params).then((result) => {
    response.send(result.rows);
  }).catch(err => {
    console.log('error:', err);
    response.send(err);
  })
})

const PORT = process.env.PORT || 5001;

//Connect to localhost for express
app.listen(PORT, () => console.log(`Server connected to localhost:${PORT}`))
.on('error', console.log);