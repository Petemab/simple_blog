const express = require('express');
const app = express();
const router = require('./config/router');
const { port, dbURI } = require('./config/environment');
// const errorHandler = require('./lib/errorHandler');
// const bodyParser = require('body-parser');


const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);



app.use(express.static(`${__dirname}/public`));
// app.use(bodyParser.json());
app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
// app.use(errorHandler);

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
