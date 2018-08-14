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
    .exec()
    .populate('comments.user')
    .exec()
    .then(article => {
      if(!article) return res.sendStatus(404);
      res.json(article);
    })
    .catch(next);

}



module.exports = {
  index: indexRoute,
  show: showRoute
};
