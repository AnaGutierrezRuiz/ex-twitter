require('dotenv').config();
const logger = require('morgan');

require('./configs/db.config');

const express = require('express');
const app = express();

app.use(logger('dev'));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

const routes = require("./configs/routes.config");
app.use(routes)

app.use(express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));
