const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
const port = 3000;
const logger = require('./logger/logger');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const { SERVICE } = process.env; // here to demo env variables
  res.send({ message: `💯 yaaay! it works (content updated)! - ${SERVICE}` });
});

app.use('/api', require('./routes/routes'));

// request to handle undefined or all other routes
app.get('*', (req, res) => {
  logger.info('users route');
  res.send('App works!!!!!');
});

app.listen(port, () => {
  logger.info('Listening on 3000');
});
