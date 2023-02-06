require('dotenv').config();
const logger = require('morgan');

require('./configs/db.config');
require('./configs/hbs.config');

const express = require('express');
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded());

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));

const routes = require("./configs/routes.config");
app.use(routes)

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send('Oops, something went wrong');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));
