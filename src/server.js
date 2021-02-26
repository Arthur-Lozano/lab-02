'use strict';

/** 
 *  @fileOverview App is what is needed with require modules into the server.  Routes are created, middleware is going out grabbing data and bringing it back beforing going into the request.  At the bottom exported an object with express app with a seperate method that can start the actual server
 *
 *  @author        Ruben Arthur Lozano jR
 *
 *
 *  @requires     NPM:npm_module_1
 *  @requires     LAB 02
 *  @requires     https://basic-express-server-lab2.herokuapp.com/
 */

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

//Middleware 
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
  app: app,
  start: port => {
    if (!port) {throw new Error ('Missing Port');}
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
