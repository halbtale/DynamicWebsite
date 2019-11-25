const express = require('express');
const serverless = require('serverless-http');
const commentsRouter = require(`${__dirname}/routes/commentsRouter`);

// connectDB
require(`${__dirname}/database/connectDb`);

//initializate express app
const app = express();

// Body parser
app.use(express.json());

// Serving static files
app.use(express.static(`${__dirname}/../`));

// Api routers
app.use('/.netlify/functions/app', commentsRouter);

module.exports = app;
module.exports.handler = serverless(app);
