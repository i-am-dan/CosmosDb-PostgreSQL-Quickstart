
const express = require('express')
const app = express()
const port = 3001

const operation = require('./operation/operation');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Read
app.get('/', (req, res) => {
  operation.readTable()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// Create Table
app.post('/', (req, res) => {
  operation.createTable()
  .then(response => {
    return res.status;
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// Drop Table
app.post('/drop', (req, res) => {
  operation.dropTable()
  .then(response => {
    return res.status;
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
  