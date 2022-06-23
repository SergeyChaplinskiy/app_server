const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({
  extended: false,
}));
app.use(express.json());
// parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());
// returns the compression middleware
app.use(compression());
// helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
// providing a Connect/Express middleware that can be used to enable CORS with various options
app.use(cors());

module.exports = app;
