const app = require('./config/server');

require('./app/routes/home')(app);

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});
