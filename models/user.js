const mongoose = require('mongoose');

// Create User Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  phone: String
})

// Use schema to create model
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;


