const dbConnection = require('../../config/dbConnection');
const path = require('path');
const express = require('express');


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
            res.render('login');
        });
    });

    app.get('/seleccionado',(req, res) => {
        
        connection.query('SELECT * FROM HOSPITAL', (err, result) => {
            console.log('Datos ', result);
            res.render('seleccionado',{
                resultado: result
            });
        }); 
        /* res.render('seleccionado'); */
    });
    app.get('/noseleccionado',(req, res) => {
        
        /* connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
            console.log('Datos ', result);
            res.render('seleccionado',{
                resultado: result
            });
        });  */
        res.render('noseleccionado');
    });
    app.get('/dashboard',(req, res) => {
        res.render('dashboard');
    });
    app.get('/admin',(req, res) => {
        res.render('admin');
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
    app.get('/index.js', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.js'))
    })
    app.get('/favicon.ico', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/favicon.ico'))
    })
    /* app.use(express.favicon(path.join(__dirname ,'../public/favicon.ico'))); */
    /* app.use(express.static('public')) */
} 