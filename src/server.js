'use strict';


// 3rd Party Dependencies (modules)

const express = require('express');
const app = express();


// Our own custom modules


const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const validator = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');



//Our Own Global Middlewear
app.use(logger);
// app.use(myValidator);

//Route-Possible middleware in the route to help with code review questions
app.get('/person', validator, (req, res) => {
  // console.log('Test');
  res.status(200).json({
    name: req.query.name,
  });
});


//Error Handlers

app.use('*', notFoundHandler);
app.use(errorHandler);


//Export an object with the express app and separate method that can start the server

module.exports = {
  // name: "name provided",
  server: app,
  start: port => {
    if (!port) {throw new Error ('Missing Port');}
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};