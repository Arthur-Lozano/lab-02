'use strict';


// module.exports = (err, req, res, next) => {
//   //Sometimes, errors can come in as an object and othertimes they can come in as a string
//   const error = err.message ? err.message : err;

//   const errorObject = {
//     status: 500,
//     message: error
//   }
//   console.log(errorObject);
//   res.status(500).json(errorObject);
// }

module.exports = (err, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `Server Error ${err}`

  })
}
