'use strict';


// 3rd Party Dependencies (modules)

const express = require('express');


// Our own custom modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('')

const app = express();


