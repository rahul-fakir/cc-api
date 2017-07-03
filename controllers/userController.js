'use strict';

const Promise = require('bluebird');
const R = require('ramda');
const User = require('../models/userModel');
const config = require('../config/config.js');

const registerUser = (email, password, name) => {
  return new Promise((resolve, reject) => {
    const newUser = new User({
      email: email,
      password: password,
      accessType: 'STANDARD',
      name: {
        first: name.first,
        last: name.last,
      },
    });

    const promise = newUser.save();
    return promise.then((user) => {
      resolve(user)
    })
    .catch((err) => {
      reject(err)
    });
  })

}


const getUser = (email) => {
  return new Promise((resolve, reject) => {
    const promise = User.findOne({ email: email }).exec();
    return promise.then((user) => {
      resolve(user);
    })
    .catch((err) => {
      reject(err)
    });
  })


};


module.exports = {
  getUser,
  registerUser
}