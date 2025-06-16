const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name field
  email: { type: String, required: true, unique: true }, // Email must be unique
  password: { type: String, required: true } // Store hashed password
});

module.exports = mongoose.model('User', UserSchema); // Export User model
