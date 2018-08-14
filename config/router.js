const router = require('express').Router();
const articles = require('../controllers/articles');


router.route('/articles')
  .get(articles.index)
  //make this secure once I've tested it
  .post(articles.create);

router.route('/articles/:id')
  .get(articles.show)
  //make this secure once I've tested it
  .put(articles.update)
  //make this secure once I've tested it
  .delete(articles.delete);

//make this secure once I've tested it
router.post('/events/:id/comments', articles.commentCreate);
router.delete('/events/:id/comments/:commentId', articles.commentDelete);
