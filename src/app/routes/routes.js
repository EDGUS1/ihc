const dbConnection = require('../../config/dbConnection');
const path = require('path');


//npm run dev
module.exports = app => {

    const connection = dbConnection();

    app.get('/',(req, res) => {
        
        connection.query('SELECT * FROM HOSPITAL', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('home',{
                resultado: result
            });
        });
    });

    app.get('/verificar',(req, res) => {
        
        connection.query('SELECT * FROM PACIENTE', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('verificar',{
                resultado: result
            });
        });
    });

    app.get('/login',(req, res) => {
        
        connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('login',{
                resultado: result
            });
        });
    });

    app.get('/seleccionado',(req, res) => {
        
        connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('seleccionado',{
                resultado: result
            });
        }); 
    });


    app.post('/home', (req, res) => {
       /*  const {id, title, news, pass} = req.body;
        
        connection.query('INSERT INTO usuario SET?',{
            id_usuario: id,
            nombre_completo_usuario: title,
            correo: news,
            contrasenia: pass
        } , (err, result) =>{
            res.redirect('/');
        }); */
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
        res.redirect('seleccionado');
    });

    app.get('/header.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/header.css'))
    })
    app.get('/footer.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/footer.css'))
    })
    app.get('/index.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.css'))
    })
    app.get('/verificar.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/verificar.css'))
    })
    app.get('/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.js'))
    })
    /* app.use(express.static('public')) */
} 