
// get the packages we need
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const authController = require('./authentication/authentication.js');
const userRouteHandler = require('./routeHandlers/userRouteHandler.js');


const config = require('./config/config.js');

const port = config.APP_PORT;
const app = express();


mongoose.connect(config.MONGO_URL); 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator({
  customValidators: {
    isArray: val => Array.isArray(val),
    arrayNotEmpty: arr => (arr.length > 0),
    gte: (param, num) => (param >= num),
  },
}));


const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
  next();
});


router.get('/', (req, res) => {
  res.json({ msg: 'CC API' });
});

//  ============================================
//  API ROUTES
//  ============================================

//  Aquire Token Route
router.use('/user/authenticate', 
  authController.passport.authenticate(
    'local', {
      session: false,
    }), 
    authController.serialize,
    authController.generateToken,
    authController.respond
  );

// Unauthenticated routes

//  User Routes
router.route('/user/register')
  .post(userRouteHandler.handleUserRegistrationRoute);

// Middleware
router.use(authController.authenticate, (req, res, next) => {
  next();
});

//  Authenticated routes

//  User Routes
router.route('/user')
  .get(userRouteHandler.handleGetUserRoute);


app.use('/', router);
app.listen(config.APP_PORT);
console.log(`API is running on port ${config.APP_PORT}`)
