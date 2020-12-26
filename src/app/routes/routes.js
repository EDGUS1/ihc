const dbConnection = require('../../config/dbConnection');
const path = require('path');
/* const express = require('express'); */


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
        res.render('verificar');
    });

    app.get('/login',(req, res) => {
        res.render('login');
    });

    app.get('/seleccionado',(req, res) => {
        //falta recibir la informacion de la persona que consulta
        connection.query('SELECT * FROM HOSPITAL', (err, result) => {
            /* console.log('Datos ', result); */
            res.render('seleccionado',{
                resultado: result
            });
        }); 
    });
    app.get('/noseleccionado',(req, res) => {
        res.render('noseleccionado');
    });
    app.get('/dashboard',(req, res) => {
        res.render('dashboard');
    });
    app.get('/admin',(req, res) => {
        res.render('admin');
    });

    app.post('/verificar', (req, res) => {
        const {dni, nombre} = req.body;

        
        /* connection.query('SELECT * FROM PACIENTE', (err, result) => {
            
            if(dni == '1' && nombre == 'persona'){

                res.redirect('seleccionado');
            }else{

                res.redirect('noseleccionado');
            }
        });  */
        if(dni == '1' && nombre == 'persona'){

            res.redirect('seleccionado');
        }else{

            res.redirect('noseleccionado');
        }
    });

    app.post('/login', (req, res) => {
        const {username, password} = req.body;
        /* console.log(`user -> ${username}    pass -> ${password}`) */
        //no tengo q hacer un insert sino una consulta para comparar credenciales
        connection.query('SELECT * FROM ADMINISTRADOR', (err, result) =>{
            /* console.log(result) */
            for(let i = 0 ; i< result.length; i++){

                if(username == result[i].nombre_admin && password == result[i].password){

                    if(result[i].permiso == 'comun'){
                        res.redirect('admin');
                        break;
                    }else if(result[i].permiso == 'superadmin'){
                        res.redirect('dashboard');
                    }/* else{
                        res.redirect('/');
                    } */
                }
            }
            
        });
        
        /* let type = 'superadmin'; */
        
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
    app.get('/login.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/login.css'))
    })
    app.get('/seleccion.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/seleccion.css'))
    })
    app.get('/admin.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/admin.css'))
    })
    app.get('/categoria.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/categoria.css'))
    })
    app.get('/noselect.css', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/noselect.css'))
    })
    app.get('/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.js'))
    })
    app.get('/favicon.ico', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/favicon.ico'))
    })
    app.use(function(req, res, next) {
        res.status(404).render('404');
    });
    
    /* app.use(express.favicon(path.join(__dirname ,'../public/favicon.ico'))); */
    /* app.use(express.static('public')) */
} 