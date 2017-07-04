
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Strategy = require('passport-local');
const _ = require('lodash');
const expressJwt = require('express-jwt');

const User = require('../models').User;
const config = require('../config/config');

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
}, (email, password, done) => {
  User.findAll({
    limit: 1,
    where: {
      email,
    },
  }).then((data) => {
    if (_.isEqual(data.length, 0)) {
      throw new Error('Could not find user with provided email address');
    }
    data[0]._modelOptions.classMethods.verifyPassword(password, data[0].dataValues.password, (matchErr, isMatch) => {
      if (isMatch && !matchErr) {
        done(null, {
          data,
        });
      } else {
        done(null, false);
      }
    });
  })
  .catch((err) => {
    done(null, false);
  });
}));

const generateToken = (req, res, next) => {
  req.token = jwt.sign({

    email: req.body.email,
  }, config.APP_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  next();
};

function respond(req, res) {
  res.status(200).json({
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
