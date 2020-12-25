const dbConnection = require('../../config/dbConnection');

module.exports = app => {

    const connection = dbConnection();

    app.get('/',(req, res) => {
        
        connection.query('SELECT * FROM HOSPITAL', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('home/home',{
                resultado: result
            });
        });
    });

    app.get('/verificar',(req, res) => {
        
        connection.query('SELECT * FROM PACIENTE', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('verificar/verificar',{
                resultado: result
            });
        });
    });

    app.get('/login',(req, res) => {
        
        connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('login/login',{
                resultado: result
            });
        });
    });

    app.get('/seleccionado',(req, res) => {
        
        connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('seleccionado/seleccionado',{
                resultado: result
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

    app.post('/verificar', (req, res) => {
        /* const {id, title, news, pass} = req.body; */
        
        /* connection.query('INSERT INTO usuario SET?',{
            id_usuario: id,
            nombre_completo_usuario: title,
            correo: news,
            contrasenia: pass
        } , (err, result) =>{
            res.redirect('/seleccionado');
        }); */
        res.redirect('/seleccionado');
    });
} 