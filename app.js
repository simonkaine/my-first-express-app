console.log("FUBAR");

const express = require('express')
const app = express()
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello FUBAR!')
});

app.get('/human', (req, res) => {
//   console.log(req.query);
  res.json(data);
});

app.get('/human/:id', (req, res) => {
    const humanId = Number(req.params.id);
    const matchingId = data.find((item) => item.id === humanId);
    res.json(matchingId);
  });

module.exports = app;