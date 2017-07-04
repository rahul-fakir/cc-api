const Promise = require('bluebird');
const _ = require('lodash');
const User = require('../models').User;

const registerUser = (email, password, name) => new Promise((resolve, reject) => {
  const newUser = {
    email,
    password,
    firstName: name.firstName,
    lastName: name.lastName,
  };

  User.create(newUser)
    .then((data) => {
      resolve({
        user: {
          id: data.id,
          email: data.email,
        },
      });
    })
    .catch(err => reject({ error: err.message }));
});

const getUser = email => new Promise((resolve, reject) => {
  User.findAll({
    limit: 1,
    where: {
      email,
    },
  }).then((user) => {
    if (_.isEqual(user.length, 0)) {
      throw new Error('User not found');
    }
    resolve(_(user[0]).pick(['email', 'firstName']).pickBy().value());
  }).catch((err) => {
    reject(err);
  });
});


module.exports = {
  getUser,
  registerUser,
};
