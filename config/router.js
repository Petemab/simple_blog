const router = require('express').Router();
const articles = require('../controllers/articles');
const users = require('../controllers/users');


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

router.route('/users')
  .get(users.userIndex);

router.route('/users/:id')
  .get(users.userShow)
  //make this secure once I've tested it
  .delete(users.userDelete);

//make this secure once I've tested it
router.post('/events/:id/comments', articles.commentCreate);
router.delete('/events/:id/comments/:commentId', articles.commentDelete);


module.exports = router;
