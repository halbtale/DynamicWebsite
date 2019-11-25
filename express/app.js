const dotenv = require('dotenv');
const express = require('express');
const serverless = require('serverless-http');
const commentsRouter = require('./routes/commentsRouter');

dotenv.config({ path: `${__dirname}/config.env` });

// connectDB
require('./database/connectDB');

//initializate express app
const app = express();

// Body parser
app.use(express.json());

// Serving static files
app.use(express.static(`${__dirname}/../`));

// Api routers
app.use('/api/v1/comments', commentsRouter);

module.exports = app;
module.exports.handler = serverless(app);
