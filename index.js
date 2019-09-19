const express = require('express');
const ps = require('./postgres-config');

const app = express();
ps.connect();

app.get('/api', (request, response) => {
  response.send('Hi there! you did an api call');
})

app.get('/api/books', (request, response) => {
  ps.client.query("SELECT * FROM books").then((result) => {
    response.send(result.rows);
  }).catch(err => {
    console.log('error:', err);
    response.send(err);
  })
})

app.listen(5001, () => console.log('Server connected to localhost:5001'));