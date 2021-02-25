'use strict';

//All middlewear has access to requests
//Loggin out the interesting parts

const logger = (req, res, next) => {
  console.log('Request', req.method, req.path);

  // res.send(req.query.name);

  //Call next so next function in line can do it's work
  next();
}

module.exports = logger;
