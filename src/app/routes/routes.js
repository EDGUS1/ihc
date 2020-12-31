/* const dbConnection = require('../../config/dbConnection'); */
const path = require('path');
const express = require('express');
const router = express.Router();
const pool = require('../../config/database');

router.get('/', async(req, res) => {
    const links = await pool.query('SELECT * FROM HOSPITAL');
    res.render('home', { resultado: links })
});

module.exports = router;

router.get('/verificar', (req, res) => {
    res.render('verificar');
})


router.get('/login', (req, res) => {
    res.render('login');
})

router.get('', (req, res) => {

})

router.get('', (req, res) => {

})

router.get('', (req, res) => {

})
router.get('', (req, res) => {

})

router.get('', (req, res) => {

    })
    //npm run dev
    /* module.exports = app => {

        const connection = dbConnection();
        app.get('/seleccionado', (req, res) => {

            connection.query('SELECT * FROM HOSPITAL', (err, result) => {

                res.render('seleccionado', {
                    resultado: result
                });
            });
        });
        app.get('/noseleccionado', (req, res) => {
            res.render('noseleccionado');
        });
        app.get('/dashboard', (req, res) => {
            res.render('dashboard');
        });
        app.get('/admin', (req, res) => {
            res.render('admin');
        });

        app.post('/verificar', (req, res) => {
            const { dni, nombre } = req.body;

            if (dni == '1' && nombre == 'persona') {

                res.redirect('seleccionado');
            } else {

                res.redirect('noseleccionado');
            }
        });

        app.post('/login', (req, res) => {
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

            });

        });

        app.use(express.static(path.join(__dirname, '../public')));

        app.use(function(req, res, next) {
            res.status(404).render('404');
        });

    } */