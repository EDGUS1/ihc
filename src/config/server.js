const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(bodyParser.urlencoded({ extended: false }));

/* app.use(require('../app/routes')) */
app.use(require('../app/routes/routes'))

module.exports = app;