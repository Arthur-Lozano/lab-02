'use strict';

function handle404(req, res) {
  const errorObject = {
    status:404,
    message:'Sorry we could not find what you are looking for'
  }
  res.status(404).json(errorObject);
}

module.exports = handle404;