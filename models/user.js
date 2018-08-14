const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  username: {type: String, required: 'This field is required'},
  email: {type: String, required: 'This field is required' },
  password: {type: String, required: 'This field is required' },
  image: {type: String},
  date: {type: Date}
});



module.exports = mongoose.model('User', userSchema);
