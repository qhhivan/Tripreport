const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const routes = require('./routes/simple2train');

const { notFound, errorHandler } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
