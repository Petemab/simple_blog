const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Article = require('../models/article');
// const User = require('../models/user');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Article.create([
    {
      articleTitle: 'My First Post',
      text: '',
      image: '',
      comments: [ {
        commentTitle: 'Rubbish',
        text: 'This man can\'t write'
      },
      {
        commentTitle: 'Good',
        text: 'This man can write'
      }
      ]
    } , {
      eventName: 'Big Night Out',

  ])
    .then(events => console.log(`${events.length} events created`));

  User
    .create([{
      username: 'Billy111',
      email: 'bill@bill',
      password: 'bill',
      passwordConfirmation: 'bill',
      image: 'http://cdn.smosh.com/wp-content/uploads/bloguploads/strange-mugshot-neck.jpg',
      faveComedians: ['Michael McIntyre', 'Roy Chubby Brown']
    },{
      username: 'Sarah',
      email: 'sarah@ga.co',
      password: 'sara',
      passwordConfirmation: 'sara',
      image: 'https://i.guim.co.uk/img/media/db8e8f0dfd7a5dcfad713ea4fd5382e5ff1324b3/0_685_4342_3977/master/4342.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=642cdbb0be7fca163c38b7b19716249b',
      faveComedians: ['Dawn French', 'Frankie Boyle']
    },{
      username: 'Moon',
      email: 'moon@moon',
      password: 'moon',
      passwordConfirmation: 'moon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lyudmila_Putina_Portrait2.jpg/220px-Lyudmila_Putina_Portrait2.jpg',
      faveComedians: ['Michael McIntyre', 'Roy Chubby Brown']
    }
    ])
    .then(users => {
      console.log(`${users.length} users created`);
      Event.create([{eventName: 'hello'}])
        .then(console.log('event created'));
    })

    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
