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


// 'use strict';
// const bcrypt = require('bcrypt');

// module.exports = (sequelize, DataTypes) => {
//   const user = sequelize.define('user', {
//     email: {
//       type: DataTypes.STRING,
//       validate: {
//         isEmail: {
//           msg: 'Invalid email address'
//         }
//       }
//     },
//     name: {
//       type: DataTypes.STRING,
//       validate: {
//         len: {
//           args: [1, 99],
//           msg: 'Name must be between 1 and 99 characters'
//         }
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       validate: {
//         len: {
//           args: [8, 99],
//           msg: 'password must be 8 and 99 characters'
//         }
//       }
//     }
//   },{
//     hooks: {
//       beforeCreate: function(createdUser, options) {
//         if (createdUser && createdUser.password) {

        
//         // hash the password
//         let hash = bcrypt.hashSync(createdUser.password, 12);
//         // store the hash as the users password
//         createdUser.password = hash;
        
//       }
//     }
//   }
//   });
//   user.associate = function(models) {
//     // associations can be defined here
//   };
//   // compares entered password to hashed password
//   user.prototype.validPassword = function(passwordTyped) {
//     return bcrypt.compareSync(passwordTyped, this.password);
//   };

//   // remove the password before serializing
//   user.prototype.toJSON = function() {
//     let userData = this.get();
//     delete userData.password;
//     return userData;
//   }

//   return user;
// };