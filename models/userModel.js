// Load required packages
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define our user schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  accessType: { type: String, required: true },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  }
}, {
  timestamps: true,
});


// Execute before each user.save() call
UserSchema.pre('save', function hashPassword(callback) {
  const user = this;

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  return bcrypt.genSalt(5, (err, salt) => {
    if (err) return callback(err);

    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return callback(hashErr);
      user.password = hash;
      return callback();
    });
  });
});

UserSchema.methods.verifyPassword = function verifyPassword(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

// Export the Mongoose model
module.exports = mongoose.model('user', UserSchema);
