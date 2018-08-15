const Article = require('../models/article');


function indexRoute(req, res, next) {
  Article
    .find()
    .exec()
    .then(articles => res.json(articles))
    .catch(next);
}

function showRoute(req, res, next){
  Article
    .findById(req.params.id)
    // .populate('comments.user')
    .exec()
    .then(article => {
      if(!article) return res.sendStatus(404);
      res.json(article);
    })
    .catch(next);
}

function createRoute(req, res, next){
  // remember to this add to attach user to the newly created event once I've done log in and register  ----- req.body.user = req.currentUser
  // req.body.user = req.currentUser;
  Article
    .create(req.body)
    .then(article => res.status(201).json(article))
    .catch(next);
}

function updateRoute(req, res, next){
  Article
    .findById(req.params.id)
    //remember to populate
    .then(article => {
      if(!article) return res.sendStatus(404);
      return Object.assign(article, req.body);
    })
    .then(article => article.save())
    .then(article => res.json(article))
    .catch(next);
}

function deleteRoute(req, res, next){
  Article
    .findById(req.params.id)
    .then(article => {
      if(!article) return res.sendStatus(404);
      return article.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

function commentCreateRoute(req, res, next) {
  // req.body.user = req.currentUser;
  Article
    .findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(article => {
      article.comments.push(req.body);
      return article.save();
    })
    .then(article => res.json(article))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Article.findById(req.params.id)
    .populate('comments.user')
    .exec()
    .then(article => {
      const comment = article.comments.id(req.params.commentId);
      if(!comment.user._id.equals(req.currentUser._id)) {
        throw new Error('Unauthorized');
      }
      comment.remove();
      return article.save();
    })
    .then(article => res.json(article))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
