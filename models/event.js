const mongoose = require('mongoose');


// Create User Schema

const eventSchema = new mongoose.Schema({
  date: String,
  time: String,
  friends: String
})

// Use schema to create model
const Event = mongoose.model('Event', eventSchema);

// Export User model
module.exports = Event;
