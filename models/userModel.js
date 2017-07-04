//  External modules
const bcrypt = require('bcrypt-nodejs');

const encryptPassword = (user) => new Promise((resolve, reject) => {
  bcrypt.genSalt(5, (err, salt) => {
    if (err) reject(err);

    bcrypt.hash(user.dataValues.password, salt, null, (hashErr, hash) => {
      if (hashErr) reject();
      user.dataValues.password = hash;
      resolve(user);
    });
  });
});

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      verifyPassword(candidatePassword, currentPassword, cb) {
        bcrypt.compare(candidatePassword, currentPassword, (err, isMatch) => {
          if (err) return cb(err);
          return cb(null, isMatch);
        });
      },
    },
  });

  User.hook('beforeValidate', (user) =>  {
    if (!user._changed.password) {
      return sequelize.Promise.resolve(user);
    }
    return encryptPassword(user).then((updatedUser) => sequelize.Promise.resolve(updatedUser));
  });

  return User;
};
