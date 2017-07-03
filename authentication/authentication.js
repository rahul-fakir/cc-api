
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Strategy = require('passport-local');
const expressJwt = require('express-jwt');

const User = require('../models/userModel');
const config = require('../config/config.js');

const authenticate = expressJwt({
  secret: config.APP_SECRET,
  getToken: (req) => {
    if (req.headers.authorization) {
      return req.headers.authorization;
    } else if (req.query && req.query.token) {
      return req.query.token;
    } else if (req.body && req.body.token) {
      return req.body.token;
    }
    return null;
  },
});

//  Token Authetication
passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password',
}, (username, password, done) => {
  const userPromise = User.findOne({
    email: username,
  }).exec();

  return userPromise.then((user) => {
    user.verifyPassword(password, (matchErr, isMatch) => {
      if (isMatch && !matchErr) {
        done(null, {
          user,
        });
      } else {
        done(null, false);
      }
    });
  }).catch((userErr) => {
    done(null, false);
  });
}));

const generateToken = (req, res, next) => {
  req.token = jwt.sign({
    id: req.user.id,
    email: req.user.email
  }, config.APP_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  next();
};

function respond(req, res) {
  res.status(200).json({
    status: true,
    token: req.token,
  });
}

const db = {
  updateOrCreate: (user, callback) => {
    callback(null, user);
  },
};

const serialize = (req, res, next) => {
  db.updateOrCreate(req.user, (err, user) => {
    if (err) {
      return next(err);
    }

    req.user = user.user;
    next();
  });
};

module.exports = {
  authenticate,
  passport,
  serialize,
  generateToken,
  respond,
};
