// 'use strict';
const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect(
  process.env.MONGO_URL || 'mongodb://localhost:27017/museumexplorer',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
let db = mongoose.connection;
db.once('open', () => {
  console.log(`🔗 Connected to MongoDB on ${db.host}: ${db.port}`);
});
db.on('error', err => {
  console.log(`🐻 Bad news bears! MongoDB error:\n${err}`);
});

// Require your other models, and export them
// NOTE: Your files can have multiple module.exports statements!
// Make sure to export both your Museum and Piece models!
module.exports.User = require('./user');
module.exports.Event = require('./event');




// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);
// var env       = process.env.NODE_ENV || 'development';
// var config    = require(__dirname + '/../config/config.json')[env];
// var db        = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(function(file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
