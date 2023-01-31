require('dotenv').config();
const logger = require('morgan');

const express = require('express');
const app = express();

app.use(logger('dev'));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));
