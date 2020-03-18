const mongoose = require('mongoose');

// Create User Schema

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  phone: String,
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});


const eventSchema = new mongoose.Schema({
  date: String,
  time: String,
  friends: [userSchema],
  restaurant: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }]
})

// Use schema to create model
const Event = mongoose.model('Event', eventSchema);



// Use schema to create model
const User = mongoose.model('User', userSchema);

// Export User model
module.exports = User;

// Export User model
module.exports = Event;

