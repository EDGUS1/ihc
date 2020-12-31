/* const dbConnection = require('../../config/dbConnection'); */
const path = require('path');
const express = require('express');
const router = express.Router();
const pool = require('../../config/database');

router.get('/', async(req, res) => {
    const respuesta = await pool.query('SELECT * FROM HOSPITAL');
    res.render('home', { resultado: respuesta })
});


router.get('/verificar', (req, res) => {
    res.render('verificar');
})


router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/seleccionado', async(req, res) => {
    const respuesta = await pool.query('SELECT * FROM HOSPITAL');
    res.render('seleccionado', { resultado: respuesta })
})

router.get('/noseleccionado', (req, res) => {
    res.render('noseleccionado');
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})
router.get('/admin', (req, res) => {
    res.render('admin');
})

router.post('/verificar', (req, res) => {

    const { dni, nombre } = req.body;

    if (dni == '1' && nombre == 'persona') {

        res.redirect('seleccionado');
    } else {

        res.redirect('noseleccionado');
    }
})

router.post('/login', (req, res) => {
    //falta arregalarlo a router
    const { username, password } = req.body;

    connection.query('SELECT * FROM ADMINISTRADOR', (err, result) => {
        for (let i = 0; i < result.length; i++) {

            if (username == result[i].nombre_admin && password == result[i].password) {

                if (result[i].permiso == 'comun') {
                    res.redirect('admin');
                    break;
                } else if (result[i].permiso == 'superadmin') {
                    res.redirect('dashboard');
                }
            }

        }
    })
});

module.exports = router;