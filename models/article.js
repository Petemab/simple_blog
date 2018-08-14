const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  text: {type: String, required: true },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  time: {type: Date, default: Date.now }
});

const articleSchema = new mongoose.Schema({
  text: {type: String, required: true },
  image: {tpye: String},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  time: {type: Date, default: Date.now },
  comments: [ commentSchema ]
});



module.exports = mongoose.model('Article', articleSchema);
