const dbConnection = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbConnection();

    app.get('/',(req, res) => {
        
        connection.query('SELECT * FROM hospital', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('home/home',{
                news: result
            });
        });
    });
    app.post('/home', (req, res) => {
        const {id, title, news, pass} = req.body;
        
        connection.query('INSERT INTO usuario SET?',{
            id_usuario: id,
            nombre_completo_usuario: title,
            correo: news,
            contrasenia: pass
        } , (err, result) =>{
            res.redirect('/');
        });
    });
} 