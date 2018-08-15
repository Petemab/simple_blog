const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {dbURI} = require('../config/environment');
const Article = require('../models/article');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Article.create([
    {
      articleTitle: 'My First Post',
      text: 'Lorem ipsum dolor amet hot chicken crucifix listicle, succulents offal williamsburg intelligentsia cold-pressed quinoa. Raclette locavore tofu occupy cliche stumptown. Mixtape pinterest distillery, wolf tousled yr austin activated charcoal copper mug waistcoat kitsch plaid DIY post-ironic. Plaid slow-carb keytar, hella offal wayfarers lyft poutine fingerstache glossier sartorial banh mi vexillologist. Lumbersexual iceland raclette, unicorn everyday carry pour-over plaid asymmetrical PBR&B williamsburg deep v DIY. Mumblecore kombucha banjo activated charcoal bitters edison bulb brunch, swag succulents selfies keffiyeh street art everyday carry gentrify. Drinking vinegar locavore brooklyn williamsburg.',
      image: 'https://www.fillmurray.com/200/300',
      comments: [
        {
          commentTitle: 'Rubbish',
          text: 'This man can\'t write'
        }, {
          commentTitle: 'Good',
          text: 'This man can write'
        }
      ]
    }, {
      articleTitle: 'My Second Post',
      text: 'Cloud bread blue bottle green juice poutine pinterest, gastropub ugh readymade. Thundercats bitters poutine vape, try-hard trust fund snackwave echo park af raclette PBR&B wolf coloring book. Shaman you probably haven\'t heard of them skateboard, pork belly taxidermy pour-over pug kickstarter. Pug banh mi next level, hot chicken keytar poke sriracha artisan small batch kale chips roof party gentrify portland. Fanny pack cronut cred, paleo man bun organic skateboard irony schlitz tattooed gentrify. Synth kale chips whatever viral small batch tumeric direct trade tbh vinyl narwhal. Butcher swag leggings aesthetic raclette humblebrag poke pickled YOLO pour-over scenester beard 3 wolf moon art party meh.',
      image: 'https://www.fillmurray.com/g/400/300',
      comments: [
        {
          commentTitle: 'What?',
          text: 'I don\'t undertsand'
        }, {
          commentTitle: 'Who?',
          text: 'I understand'
        }
      ]
    }

  ])
    .then(articles => console.log(`${articles.length} articles created`));

  User.create([
    {
      username: 'Billy111',
      email: 'bill@bill',
      password: 'bill',
      passwordConfirmation: 'bill',
      image: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/strange-mugshot-neck.jpg'
    }, {
      username: 'Sarah',
      email: 'sarah@ga.co',
      password: 'sara',
      passwordConfirmation: 'sara',
      image: 'https://i.guim.co.uk/img/media/db8e8f0dfd7a5dcfad713ea4fd5382e5ff1324b3/0_685_4342_3977/master/4342.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=642cdbb0be7fca163c38b7b19716249b'
    }, {
      username: 'Moon',
      email: 'moon@moon',
      password: 'moon',
      passwordConfirmation: 'moon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lyudmila_Putina_Portrait2.jpg/220px-Lyudmila_Putina_Portrait2.jpg'
    }
  ])
    .then(users => {
      console.log(`${users.length} users created`);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
