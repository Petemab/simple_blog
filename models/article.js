const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
  text: {type: String, required: true },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}

});



module.exports = mongoose.model('Article', articleSchema);
