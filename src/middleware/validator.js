'use stict';


//midelware for fourt
const validator = (req, res, next) => {
  //  console.log(req);
  console.log('request name', req.query.name);

  if (typeof req.query.name !== 'string') {
    next('Not a string');
  } else
    //Call next so next function in line can do it's work
    next();
}

module.exports = validator;
