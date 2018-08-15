const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  commentTitle: {type: String, required: true },
  text: {type: String},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  time: {type: Date, default: Date.now() }
});

const articleSchema = new mongoose.Schema({
  articleTitle: {type: String, required: true },
  text: {type: String, required: true },
  image: {type: String},
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  time: {type: Date, default: Date.now() },
  comments: [ commentSchema ]
});



module.exports = mongoose.model('Article', articleSchema);
