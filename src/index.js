/* const app = require('./config/server'); */

/* require('./app/routes/routes')(app); */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { database } = require('./config/keys');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));

app.use(bodyParser.urlencoded({ extended: false }));
/* app.use(sesion({
        secret: 'mysqlsession',
        resave: false,
        saveUninitialized: false,
        store: new mysqlStore(database)
    })) */
/* app.use(require('../app/routes')) */
app.use(require('./app/routes/routes'))

app.use(express.static(path.join(__dirname, 'app/public')));

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});